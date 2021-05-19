import { useState, useEffect } from 'react';
import { auth, createUserProfileDocument, createUserWithEmailAndPassword } from '../firebase/firebase.utils';

export const useAuthentication = () => {
	const [ user, setUser ] = useState(null);

	useEffect(() => {
		const removeListener = () => {
			auth.onAuthStateChanged(user => {
				setUser(user);
			})
		}
		return () => removeListener()
	}, [user?.id])

	return user;
}