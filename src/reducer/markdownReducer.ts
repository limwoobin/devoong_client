import { createAction , createReducer } from '@reduxjs/toolkit';

// Action Type
export const GET_MARKDOWN_ASYNC = 'GET_MARKDOWN_ASYNC';
const GET_MARKDOWN = 'GET_MARKDOWN';

export const INIT_MARKDOWN = 'INIT_MARKDOWN';
const INIT_MARKDOWN_COMPLETE = 'INIT_MARKDOWN_COMPLETE';

// Action Creator
export const getMarkdownAsync: any = createAction(GET_MARKDOWN_ASYNC);
export const getMarkdown: any = createAction(GET_MARKDOWN);

export const initMarkdown: any = createAction(INIT_MARKDOWN);
export const initMarkdownComplete: any = createAction(INIT_MARKDOWN_COMPLETE);

const initialState = {
	data: '',
	isLoading: false,
};

export default createReducer(initialState , {
	[GET_MARKDOWN]: (state , {payload: data}) => {
		state.isLoading = false;
		state.data = data;
		state.isLoading = true;
	},
	[INIT_MARKDOWN_COMPLETE]: (state) => {
		state.data = '';
		state.isLoading = false;
	}
});