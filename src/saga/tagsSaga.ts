import * as API from '@/api/tags';
import { call , put , takeEvery } from 'redux-saga/effects';
import { FIND_TAGS_ASYNC , findTags } from '@/reducer/tagsReducer';
import { TagsModel } from '@/models';

export default function* tagsSaga() {
	yield takeEvery(FIND_TAGS_ASYNC , findTagsSaga);
}

function* findTagsSaga() {
	const response: TagsModel = yield call(API.findTags);
	yield put(findTags(response));
}