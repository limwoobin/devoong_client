import * as API from '../api/markdown';
import { call , put , takeEvery } from 'redux-saga/effects';
import { createAction , createReducer } from '@reduxjs/toolkit';

// Action Type
const GET_MARKDOWN_ASYNC = 'GET_MARKDOWN_ASYNC';
const GET_MARKDOWN = 'GET_MARKDOWN';

const INIT_MARKDOWN = 'INIT_MARKDOWN';
const INIT_MARKDOWN_COMPLETE = 'INIT_MARKDOWN_COMPLETE';

// Action Creator
export const getMarkdownAsync: any = createAction(GET_MARKDOWN_ASYNC);
export const getMarkdown: any = createAction(GET_MARKDOWN);

export const initMarkdown: any = createAction(INIT_MARKDOWN);
export const initMarkdownComplete: any = createAction(INIT_MARKDOWN_COMPLETE);

export function* markdownSaga() {
	yield takeEvery(GET_MARKDOWN_ASYNC , getMarkdownSaga);
	yield takeEvery(INIT_MARKDOWN , initMarkdownSaga);
}

export function* getMarkdownSaga({payload: githubUri}: any) {
	try {
		const response: string = yield call(API.getMarkdown , githubUri);
		yield put(getMarkdown(response));
	} catch(error) {
		console.log('error ###' , error);
	}
}

export function* initMarkdownSaga() {
	yield put(initMarkdownComplete());
}

const initialState = {
	data: '',
};

export default createReducer(initialState , {
	[GET_MARKDOWN]: (state , {payload: data}) => {
		state.data = data;
	},
	[INIT_MARKDOWN_COMPLETE]: (state) => {
		state.data = '';
	}
});