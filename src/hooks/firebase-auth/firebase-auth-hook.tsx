import { useState, useEffect } from 'react';
import { User } from '@firebase/auth-types';
import { auth } from '../../firebase/firebase.utils';

export const useAuthentication = () => {
	const [ user, setUser ] = useState<User | null>(null);

	useEffect(() => {
		const removeListener = () => {
			auth.onAuthStateChanged(user => {
				console.warn('yeet user', user);
				setUser(user);
			})
		}
		return () => removeListener()
	}, [user?.uid])

	return user;
}