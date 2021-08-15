import { combineReducers } from 'redux';
import postsReducer , { postsSaga } from './postsReducer';
import tagsReducer , { tagsSaga } from './tagsReducer';
import markdownReducer from './markdownReducer';
import { all } from 'redux-saga/effects';
import { markdownSaga } from '../saga/markdownSaga';

export const rootReducer = combineReducers({
	postsReducer,
	tagsReducer,
	markdownReducer
});

// export function* rootSaga() {
// 	yield all([postsSaga() , tagsSaga() , markdownSaga()]);
// }

export type RootState = ReturnType<typeof rootReducer>;