import { User } from '@firebase/auth-types';

export const setCurrentUser = (user: User | null) => ({
	type: 'SET_CURRENT_USER',
	payload: user
})