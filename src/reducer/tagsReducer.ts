import * as API from '../api/tags';
import { call , put , takeEvery } from 'redux-saga/effects';
import { createAction , createReducer } from '@reduxjs/toolkit';
import { TagsModel } from '../models';

// Action Type
const FIND_TAGS_ASYNC = 'FIND_TAGS_ASYNC';
const FIND_TAGS = 'FIND_TAGS';


// Action Creator
export const findTagsAsync: any = createAction(FIND_TAGS_ASYNC);
export const findTags: any = createAction(FIND_TAGS);

// Main Saga
export function* tagsSaga() {
	yield takeEvery(FIND_TAGS_ASYNC , findTagsSaga);
}

export function* findTagsSaga() {
	const response: TagsModel = yield call(API.findTags);
	yield put(findTags(response));
}


// initState
const initialState = {
	isTagsLoading: false,
	tags: [],
};

// Toolkit Reducer
export default createReducer(initialState , {
	[FIND_TAGS]: (state , {payload: data}) => {
		state.tags = data;
		state.isTagsLoading = true;
	},
});