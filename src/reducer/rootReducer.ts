import { combineReducers } from 'redux';
import postsReducer , { postsSaga } from './postsReducer';
import tagsReducer , { tagsSaga } from './tagsReducer';
import markdownReducer , { markdownSaga } from './markdownReducer';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
	postsReducer,
	tagsReducer,
	markdownReducer
});

export function* rootSaga() {
	yield all([postsSaga() , tagsSaga() , markdownSaga()]);
}

export default rootReducer;