import { all } from 'redux-saga/effects';
import { postsSaga , markdownSaga , tagsSaga } from './';

export default function* rootSaga() {
	yield all(
		[
			postsSaga(),
			tagsSaga(),
			markdownSaga()
		]
	);
}