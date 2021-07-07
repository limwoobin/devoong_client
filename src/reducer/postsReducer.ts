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
    const response: PostsModel[] = yield call(API.getPostsAll);
    yield put(searchData(response));
}

// initState
const initialState = {
    posts: [],
    lastId: 0
}

// Toolkit Reducer
export default createReducer(initialState , {
    [SEARCH_DATA]: (state: any, {payload: data}) => {
        state.posts.length = 0;
        for (let i=0; i<data.length; i++) {
            state.posts.push({
                id: data[i].id,
                title: data[i].title,
                content: data[i].contents,
                views: data[i].views
            });

            if (i == data.length - 1) {
                state.lastId = data[i].id;
            }
        }
    }
})