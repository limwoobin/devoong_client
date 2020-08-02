import { takeLatest, all, call, put, take, delay } from 'redux-saga/effects';
import { API } from '../api/callAA';
import { UserActionType } from '../actions/userAction';
import { ApiAction } from '../reducers/appReducer';

export default function* userSaga() {
    yield all([
        takeLatest(UserActionType.SIGNUP_REQUEST , signUp$),
        takeLatest(UserActionType.LOGIN_REQUEST , login$),
        takeLatest(UserActionType.LOGOUT_REQUEST , logout$)
    ]);
}


function* signUp$() {

}

function* login$() {

}

function* logout$() {

}