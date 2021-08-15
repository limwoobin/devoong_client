import { all } from 'redux-saga/effects';
import { postsSaga , markdownSaga , tagsSaga } from './';

export function* rootSaga() {
	yield all([postsSaga() , tagsSaga() , markdownSaga()]);
}