import * as API from '../api/posts';
import { call , put , takeEvery } from 'redux-saga/effects';
import { createAction , createReducer } from '@reduxjs/toolkit';
import { PageModel, PostsModel } from '../models';

// Action Type
const SEARCH_POSTS_ASYNC = 'SEARCH_POSTS_ASYNC';
const SEARCH_DATA = 'SEARCH_DATA';

const GET_POSTS_ASYNC = 'GET_POSTS_ASYNC';
const GET_POSTS = 'GET_POSTS';

const FIND_LATEST_POSTS_ASYNC = 'FIND_LATEST_POSTS_ASYNC';
const FIND_LATEST_POSTS = 'FIND_LATEST_POSTS';

const FIND_POSTS_BY_TAGS_ASYNC = 'FIND_POSTS_BY_TAGS_ASYNC';
const FIND_POSTS_BY_TAGS = 'FIND_POSTS_BY_TAGS';

const INIT_LOADING_STATE = 'INIT_LOADING_STATE';
const INIT_LOADING_STATE_FALSE = 'INIT_LOADING_STATE_FALSE';

const INIT_STATE = 'INIT_STATE';
const INIT_STATE_COMPLETE = 'INIT_STATE_COMPLETE';

// Action Creator
export const searchPostsAsync: any = createAction(SEARCH_POSTS_ASYNC);
export const searchData: any = createAction(SEARCH_DATA);

export const getPostsAsync: any = createAction(GET_POSTS_ASYNC);
export const getPosts: any = createAction(GET_POSTS);

export const findLatestPostsAsync: any = createAction(FIND_LATEST_POSTS_ASYNC);
export const findLatestPosts: any = createAction(FIND_LATEST_POSTS);

export const findPostsByTagsAsync: any = createAction(FIND_POSTS_BY_TAGS_ASYNC);
export const findPostsByTags: any = createAction(FIND_POSTS_BY_TAGS);

export const initLoadingState: any = createAction(INIT_LOADING_STATE);
export const initLoadingStateFalse: any = createAction(INIT_LOADING_STATE_FALSE);

export const initState: any = createAction(INIT_STATE);
export const initStateComplete: any = createAction(INIT_STATE_COMPLETE);

// Main Saga
export function* postsSaga() {
	yield takeEvery(SEARCH_POSTS_ASYNC , searchPostsSaga);
	yield takeEvery(GET_POSTS_ASYNC , getPostsSaga);
	yield takeEvery(FIND_LATEST_POSTS_ASYNC , findLatestPostsSaga);
	yield takeEvery(FIND_POSTS_BY_TAGS_ASYNC , findPostsByTagsSaga);
	yield takeEvery(INIT_LOADING_STATE , initLoadingStateSaga);
	yield takeEvery(INIT_STATE , initStateSaga);
}

export function* searchPostsSaga() {
	const response: PageModel = yield call(API.getPostsAll);
	yield put(searchData(response.content));
}

export function* getPostsSaga({payload: id}: any) {
	const response: PostsModel = yield call(API.getPosts , id);
	yield put(getPosts(response));
}

export function* findLatestPostsSaga() {
	const response: PostsModel[] = yield call(API.getLatestPosts);
	yield put(findLatestPosts(response));
}

export function* findPostsByTagsSaga({payload: tagId}: any) {
	const response: PageModel = yield call(API.getPostsByTags , tagId);
	yield put(findPostsByTags(response.content));
}

export function* initLoadingStateSaga() {
	yield put(initLoadingStateFalse());
}

export function* initStateSaga() {
	yield put(initStateComplete());
}

// initState
const initialState = {
	isLoading: false,
	posts: [],
	lastId: 0,
	latestPosts: [],
	postsByTags: [],
	data: {},
};

// Toolkit Reducer
export default createReducer(initialState , {
	[SEARCH_DATA]: (state , {payload: data}) => {
		state.isLoading = false;
		state.posts = data;
		state.isLoading = true;
	},
	[GET_POSTS]: (state , {payload: data}) => {
		state.isLoading = false;
		state.data = data;
		state.isLoading = true;
	},
	[FIND_LATEST_POSTS]: (state , {payload: data}) => {
		state.latestPosts = data;
	},
	[FIND_POSTS_BY_TAGS]: (state , {payload: data}) => {
		state.isLoading = false;
		state.postsByTags = data;
		state.isLoading = true;
	},
	[INIT_LOADING_STATE_FALSE]: (state) => {
		state.isLoading = false;
	},
	[INIT_STATE_COMPLETE]: (state) => {
		state.isLoading= false;
		state.posts= [];
		state.lastId= 0;
		state.latestPosts= [];
		state.postsByTags= [];
		state.data= {};
	}
});