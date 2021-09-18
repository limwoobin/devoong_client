import { all } from 'redux-saga/effects';
import { postsSaga , tagsSaga } from './';

export default function* rootSaga() {
	yield all(
		[
			postsSaga(),
			tagsSaga(),
		]
	);
}