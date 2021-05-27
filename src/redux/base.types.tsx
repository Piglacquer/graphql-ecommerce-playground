import type { UserState } from './user/user.types';
import store from './store';

export interface BaseAction {
	type: string,
	payload?: any,
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;