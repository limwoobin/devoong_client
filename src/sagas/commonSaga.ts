import { takeLatest, all, call, put, take } from 'redux-saga/effects';
import { API } from '../api/callAA';
import {
    CommonActionType,
    getRecentPostSuccess,
    getRecentPostFailure
} from '../actions/commonAction';

export default function* commonSaga() {
    yield all([
        takeLatest(CommonActionType.GET_RECENT_POST_REQUEST , getRecentPost$),
    ])
}

function* getRecentPost$() {
    console.log('common saga~~~');
    try {
        console.log('saga success');
        yield put(getRecentPostSuccess(['SUCCESS']));
    } catch (error) {
        console.log('saga:' + error);
        yield put(getRecentPostFailure(['fail']));
    }
}