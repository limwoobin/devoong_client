import { takeLatest, all, call, put, take } from 'redux-saga/effects';
import { API } from '../api/callAA';
import {
    CommonActionType
} from '../actions/commonAction';

export default function* commonSaga() {
    yield all([
        takeLatest(CommonActionType.GET_RECENT_POST_REQUEST , getRecentPost$),
    ])
}

function* getRecentPost$() {
    console.log('common saga~~~');
}