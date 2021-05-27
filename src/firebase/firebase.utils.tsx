import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { User } from '@firebase/auth-types';

type FormData = {
	email: string,
	password: string,
}

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

export const createUserProfileDocument = async (userAuth: User, additionalData:any) => {
	if (!userAuth) return;
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapshot = await userRef.get();
	if (!snapshot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			})
		} catch (error) {
			console.log('error creating user:', error);
		}
	}

	return userRef;
};

export const createUserWithEmailAndPassword = (formData: FormData) => {
	const { email, password } = formData;

	return auth.createUserWithEmailAndPassword(email, password);
};

export const signInWithEmailAndPassword = async (formData: FormData) => {
	const { email, password } = formData;

	try {
		return await auth.signInWithEmailAndPassword(email, password);
	} catch (error) {
		console.warn(`error: ${error}`);
	}
}

export default firebase;