import { takeLatest, all, call, put, take } from 'redux-saga/effects';
import { API } from '../api/callAA';
import {
    CommonActionType,
    getRecentPostSuccess,
    getRecentPostFailure,
    getRecentNoticeSuccess,
    getRecentNoticeFailure
} from '../actions/commonAction';
import axios from 'axios';


export default function* commonSaga() {
    yield all([
        takeLatest(CommonActionType.GET_RECENT_POST_REQUEST , getRecentPost$),
        takeLatest(CommonActionType.GET_RECENT_NOTICE_REQUEST , getRecentNotice$),
    ])
}

function* getRecentPost$() {
    const posts = yield axios.get('http://localhost:4000');
    console.log(posts.data);
    try {
        yield put(getRecentPostSuccess([posts.data]));
    } catch (error) {
        console.log('saga:' + error);
        yield put(getRecentPostFailure(['fail']));
    }
}

function* getRecentNotice$() {
    const notices = yield axios.get('http://localhost:4000');
    console.log(notices);
    try {
        console.log('saga success');
        yield put(getRecentNoticeSuccess(['SUCCESS']));
    } catch (error) {
        console.log('saga:' + error);
        yield put(getRecentNoticeFailure(['fail']));
    }
}