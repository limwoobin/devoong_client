import { combineReducers } from 'redux';
import { postsReducer , tagsReducer , markdownReducer } from './';

export const rootReducer = combineReducers({
	postsReducer,
	tagsReducer,
	markdownReducer
});

export type RootState = ReturnType<typeof rootReducer>;