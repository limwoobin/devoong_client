import { takeLatest, all, call, put, take, delay } from 'redux-saga/effects';
import { API } from '../api/callAA';
import { CommonActionType } from '../actions/commonAction';
import { ApiAction } from '../reducers/appReducer';
import { push } from 'connected-react-router';

export default function* commonSaga() {
    yield all([
        takeLatest(CommonActionType.GET_RECENT_POST_REQUEST , getRecentPost$),
        takeLatest(CommonActionType.GET_RECENT_NOTICE_REQUEST , getRecentNotice$),
    ])
}

function* getRecentPost$() {
    try {
        const posts = yield call(API.Get_RecentPosts);
        yield put ({ type: ApiAction.REQUEST_API_CALL_STATUS });
        yield put ({
            type: CommonActionType.GET_RECENT_POST_SUCCESS,
            payload: posts.data
        })
    } catch (error) {
        yield put({
            type: CommonActionType.GET_RECENT_POST_FAILURE,
            payload: error.message
        });
    } finally {
        yield put ({ type: ApiAction.CLEAR_API_CALL_STATUS });
    }
}

function* getRecentNotice$() {
    try {
        const notices = yield call(API.Get_RecentNotice);
        yield put({ type: ApiAction.REQUEST_API_CALL_STATUS });
        yield put({
            type: CommonActionType.GET_RECENT_NOTICE_SUCCESS,
            payload: notices
        })
    } catch (error) {
        yield put({
            type: CommonActionType.GET_RECENT_NOTICE_FAILURE,
            payload: error.message
        })
    } finally {
        yield put({ type: ApiAction.CLEAR_API_CALL_STATUS });
    }
}