import { createAction , createReducer } from '@reduxjs/toolkit';

// Action Type
export const FIND_TAGS_ASYNC = 'FIND_TAGS_ASYNC';
const FIND_TAGS = 'FIND_TAGS';

// Action Creator
export const findTagsAsync: any = createAction(FIND_TAGS_ASYNC);
export const findTags: any = createAction(FIND_TAGS);

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