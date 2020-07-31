import { takeLatest, all, call, put, take } from 'redux-saga/effects';
import { API } from '../api/callAA';
import {
    CommonActionType,
    getRecentPostSuccess,
    getRecentPostFailure,
    getRecentNoticeSuccess,
    getRecentNoticeFailure
} from '../actions/commonAction';


export default function* commonSaga() {
    yield all([
        takeLatest(CommonActionType.GET_RECENT_POST_REQUEST , getRecentPost$),
        takeLatest(CommonActionType.GET_RECENT_NOTICE_REQUEST , getRecentNotice$),
    ])
}

function* getRecentPost$() {
    // const posts = yield API.Get_RecentPosts();
    try {
        // yield put(getRecentPostSuccess([posts.data]));
        yield put(getRecentPostSuccess(['SUCCESS']));
    } catch (error) {
        yield put(getRecentPostFailure(['fail']));
    }
}

function* getRecentNotice$() {
    // const notices = yield API.Get_RecentNotice();
    try {
        yield put(getRecentNoticeSuccess(['SUCCESS']));
    } catch (error) {
        yield put(getRecentNoticeFailure(['fail']));
    }
}