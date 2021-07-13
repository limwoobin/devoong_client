import * as API from '../api/posts';
import { call , put , takeEvery } from 'redux-saga/effects';
import { createAction , createReducer } from '@reduxjs/toolkit';
import { PostsModel } from '../models';

// Action Type
const SEARCH_DATA_ASYNC = 'SEARCH_DATA_ASYNC';
const SEARCH_DATA = 'SEARCH_DATA';

// Action Creator
export const searchDataAsync: any = createAction(SEARCH_DATA_ASYNC);
export const searchData: any = createAction(SEARCH_DATA);

// Main Saga
export function* postsSaga() {
    yield takeEvery(SEARCH_DATA_ASYNC , searchDataSaga);
    // insert
    // delete
}

export function* searchDataSaga() {
    console.log('searchDataSaga...');
    const response: PostsModel[] = yield call(API.getPostsAll);
    yield put(searchData(response));
}

// initState
const initialState = {
    Posts: [],
    lastId: 0
}

// Toolkit Reducer
export default createReducer(initialState , {
    [SEARCH_DATA]: (state: any, {payload: data}) => {
        state.posts = data;
    }
})