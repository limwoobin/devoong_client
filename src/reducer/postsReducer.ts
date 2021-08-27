import { createAction , createReducer } from '@reduxjs/toolkit';
import { PageModel } from '@/models';

// Action Type
export const SEARCH_POSTS_ASYNC = 'SEARCH_POSTS_ASYNC';
const SEARCH_DATA = 'SEARCH_DATA';

export const GET_POSTS_ASYNC = 'GET_POSTS_ASYNC';
const GET_POSTS = 'GET_POSTS';

export const FIND_LATEST_POSTS_ASYNC = 'FIND_LATEST_POSTS_ASYNC';
const FIND_LATEST_POSTS = 'FIND_LATEST_POSTS';

export const FIND_POSTS_BY_TAGS_ASYNC = 'FIND_POSTS_BY_TAGS_ASYNC';
const FIND_POSTS_BY_TAGS = 'FIND_POSTS_BY_TAGS';

export const INIT_LOADING_STATE = 'INIT_LOADING_STATE';
const INIT_LOADING_STATE_FALSE = 'INIT_LOADING_STATE_FALSE';

export const INIT_STATE = 'INIT_STATE';
const INIT_STATE_COMPLETE = 'INIT_STATE_COMPLETE';

export const FIND_POSTS_ARCHIVES_ASYNC = 'FIND_POSTS_ARCHIVES_ASYNC';
const FIND_POSTS_ARCHIVES = 'FIND_POSTS_ARCHIVES';

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

export const findPostsArchivesAsync: any = createAction(FIND_POSTS_ARCHIVES_ASYNC);
export const findPostsArchives: any = createAction(FIND_POSTS_ARCHIVES);

// initState
const initialState = {
	isLoading: false,
	posts: new PageModel(),
	lastId: 0,
	latestPosts: [],
	postsByTags: new PageModel(),
	data: {},
	pagable: {},
	totalElements: 0,
	archives: [],
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
		state.isLoading = false;
		state.posts= new PageModel();
		state.lastId= 0;
		state.latestPosts= [];
		state.postsByTags= new PageModel();
		state.data= {};
	},
	[FIND_POSTS_ARCHIVES]: (state , {payload: data}) => {
		state.isLoading = false;
		state.archives = data;
		state.isLoading = true;
	}
});