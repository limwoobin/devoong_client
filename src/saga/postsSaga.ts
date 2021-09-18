import * as API from '@/api/posts';
import { call , put , takeEvery } from 'redux-saga/effects';
import { ArchiveGroupModel, PageModel, PostsModel } from '@/models';
import { SEARCH_POSTS_ASYNC , GET_POSTS_ASYNC , FIND_LATEST_POSTS_ASYNC ,
	FIND_POSTS_BY_TAGS_ASYNC , INIT_LOADING_STATE , INIT_STATE , FIND_POSTS_ARCHIVES_ASYNC ,
	searchData , getPosts , findLatestPosts , findPostsByTags 
	, initLoadingStateFalse , initStateComplete , findPostsArchives }
	from '@/reducer/postsReducer';

export default function* postsSaga() {
	yield takeEvery(SEARCH_POSTS_ASYNC , searchPostsSaga);
	yield takeEvery(GET_POSTS_ASYNC , getPostsSaga);
	yield takeEvery(FIND_LATEST_POSTS_ASYNC , findLatestPostsSaga);
	yield takeEvery(FIND_POSTS_BY_TAGS_ASYNC , findPostsByTagsSaga);
	yield takeEvery(INIT_LOADING_STATE , initLoadingStateSaga);
	yield takeEvery(INIT_STATE , initStateSaga);
	yield takeEvery(FIND_POSTS_ARCHIVES_ASYNC , findPostsArchivesSaga);
}

function* searchPostsSaga({payload: paggeable}: any) {
	try {
		const response: PageModel = yield call(API.getPostsAll , paggeable);
		yield put(searchData(response));
	} catch(error) {
		yield put ({ type: 'FAILED', error });
		alert(error);
		// history.back();
	}
}

function* getPostsSaga({payload: id}: any) {
	try {
		const response: PostsModel = yield call(API.getPosts , id);
		yield put(getPosts(response));
	} catch(error) {
		yield put ({ type: 'FAILED', error });
		alert(error);
		history.back();
	}
}

function* findLatestPostsSaga() {
	try {
		const response: PostsModel[] = yield call(API.getLatestPosts);
		yield put(findLatestPosts(response));
	} catch(error) {
		yield put ({ type: 'FAILED', error });
	}
}

function* findPostsByTagsSaga({payload: {name , pageable}}: any) {
	try {
		const response: PageModel = yield call(API.getPostsByTags , name , pageable);
		yield put(findPostsByTags(response));
	} catch (error) {
		yield put ({ type: 'FAILED', error });
		alert(error);
		history.back();
	}
}

function* initLoadingStateSaga() {
	yield put(initLoadingStateFalse());
}

function* initStateSaga() {
	yield put(initStateComplete());
}

function* findPostsArchivesSaga() {
	try {
		const response: ArchiveGroupModel[] = yield call(API.getPostsArchives);
		yield put(findPostsArchives(response));
	} catch (error) {
		yield put ({ type: 'FAILED', error });
		alert(error);
		history.back();
	}
}
