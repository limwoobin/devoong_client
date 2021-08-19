import * as API from '../api/posts';
import { call , put , takeEvery } from 'redux-saga/effects';
import { Pageable, PageModel, PostsModel } from '../models';
import { SEARCH_POSTS_ASYNC , GET_POSTS_ASYNC , FIND_LATEST_POSTS_ASYNC ,
	FIND_POSTS_BY_TAGS_ASYNC , INIT_LOADING_STATE , INIT_STATE ,
	searchData , getPosts , findLatestPosts , findPostsByTags 
	, initLoadingStateFalse , initStateComplete }
	from '../reducer/postsReducer';

export default function* postsSaga() {
	yield takeEvery(SEARCH_POSTS_ASYNC , searchPostsSaga);
	yield takeEvery(GET_POSTS_ASYNC , getPostsSaga);
	yield takeEvery(FIND_LATEST_POSTS_ASYNC , findLatestPostsSaga);
	yield takeEvery(FIND_POSTS_BY_TAGS_ASYNC , findPostsByTagsSaga);
	yield takeEvery(INIT_LOADING_STATE , initLoadingStateSaga);
	yield takeEvery(INIT_STATE , initStateSaga);
}

function* searchPostsSaga({payload: paggeable}: any) {
	const response: PageModel = yield call(API.getPostsAll , paggeable);
	yield put(searchData(response));
}

function* getPostsSaga({payload: id}: any) {
	const response: PostsModel = yield call(API.getPosts , id);
	yield put(getPosts(response));
}

function* findLatestPostsSaga() {
	const response: PostsModel[] = yield call(API.getLatestPosts);
	yield put(findLatestPosts(response));
}

function* findPostsByTagsSaga({payload: {id , pageable}}: any) {
	const response: PageModel = yield call(API.getPostsByTags , id , pageable);
	yield put(findPostsByTags(response));
}

function* initLoadingStateSaga() {
	yield put(initLoadingStateFalse());
}

function* initStateSaga() {
	yield put(initStateComplete());
}
