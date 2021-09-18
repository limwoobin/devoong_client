import { combineReducers } from 'redux';
import { postsReducer , tagsReducer } from './';

export const rootReducer = combineReducers({
	postsReducer,
	tagsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;