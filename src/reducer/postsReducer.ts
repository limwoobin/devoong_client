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

// Action Creator
export const searchPostsAsync: any = createAction(SEARCH_POSTS_ASYNC);
export const searchData: any = createAction(SEARCH_DATA);

export const getPostsAsync: any = createAction(GET_POSTS_ASYNC);
export const getPosts: any = createAction(GET_POSTS);

export const findLatestPostsAsync: any = createAction(FIND_LATEST_POSTS_ASYNC);
export const findLatestPosts: any = createAction(FIND_LATEST_POSTS);

// Main Saga
export function* postsSaga() {
	yield takeEvery(SEARCH_POSTS_ASYNC , searchPostsSaga);
	yield takeEvery(GET_POSTS_ASYNC , getPostsSaga);
	yield takeEvery(FIND_LATEST_POSTS_ASYNC , findLatestPostsSaga);
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

// initState
const initialState = {
	isPostsLoading: false,
	posts: [],
	lastId: 0,
	data: {},
	latestPosts: [],
};

// Toolkit Reducer
export default createReducer(initialState , {
	[SEARCH_DATA]: (state , {payload: data}) => {
		state.posts = data;
		state.isPostsLoading = true;
	},
	[GET_POSTS]: (state: any, {paylod: data}) => {
		state.data = data;
	},
	[FIND_LATEST_POSTS]: (state , {payload: data}) => {
		state.latestPosts = data;
	},
});