import { useState, useEffect } from 'react';
import { User } from '@firebase/auth-types';
import { auth } from '../../firebase/firebase.utils';

export const useAuthentication = () => {
	const [ user, setUser ] = useState<User | null>(() => {
		const user = auth.currentUser;
		console.warn('yeet user', user);
		return user;
	});

	function onChange(user: User | null) {
		setUser(user);
	}

	useEffect(() => {
		const removeListener = () => {
			auth.onAuthStateChanged(onChange)
		}
		return () => removeListener()
	}, [])

	return user;
}