import { takeLatest, all, call, put, take, delay } from 'redux-saga/effects';
import { callApi } from '../../core/api/callApi';
import { CommonActionType } from '../../core/api/actions/commonAction';
import { ApiAction } from '../module/appReducer';
import { push } from 'connected-react-router';

export default function* commonSaga() {
    yield all([
        takeLatest(CommonActionType.GET_RECENT_POST_REQUEST , getRecentPost$),
        takeLatest(CommonActionType.GET_RECENT_NOTICE_REQUEST , getRecentNotice$),
    ])
}


function* getRecentPost$() {
    try {
        // const posts = yield call(callApi.Get_RecentPosts);
        const posts: any = call(callApi.Get_RecentPosts);
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
        // const notices = yield call(callApi.Get_RecentNotice);
        const notices: any = call(callApi.Get_RecentNotice);
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