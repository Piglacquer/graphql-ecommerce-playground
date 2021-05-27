import type { User } from '@firebase/auth-types';

export interface UserState {
	currentUser: null | User,
}