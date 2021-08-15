import { postsSaga } from '../reducer/postsReducer';
import { tagsSaga } from '../reducer/tagsReducer';
import { all } from 'redux-saga/effects';
import { markdownSaga } from './markdownSaga';

export function* rootSaga() {
	yield all([postsSaga() , tagsSaga() , markdownSaga()]);
}