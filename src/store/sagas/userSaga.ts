import { takeLatest, all, call, put, take, delay } from 'redux-saga/effects';
import { callApi } from '../../core/api/callApi';
import { UserActionType , SignUp} from '../../core/api/actions/userAction';
import { ApiAction } from '../module/appReducer';
import { UserModel } from '../../models/UserModel';
import {
    SignUpRequest,
    LoginRequest,
    EmailOverlapCheckRequest,
} from '../module/userReducer';

export default function* userSaga () {
    yield all([
        takeLatest(UserActionType.EMAIL_OVERLAP_CHECK_REQUEST , emailOverlapCheck$),
        takeLatest(UserActionType.SIGNUP_REQUEST , signUp$),
        takeLatest(UserActionType.LOGIN_REQUEST , login$),
        takeLatest(UserActionType.LOGOUT_REQUEST , logout$)
    ]);
}

function* emailOverlapCheck$ (action: EmailOverlapCheckRequest) {
    try {
        const userEmailCheck = callApi.USER_EMAIL_CHK(action.payload);
        yield put ({ type: ApiAction.REQUEST_API_CALL_STATUS })
        yield put ({
            type: UserActionType.EMAIL_OVERLAP_CHECK_SUCCESS,
            payload: userEmailCheck
        })
    } catch (error) {
        yield put ({
            type: UserActionType.EMAIL_OVERLAP_CHECK_FAILURE,
            payload: error.message
        })
    } finally {
        yield put ({ type: ApiAction.CLEAR_API_CALL_STATUS })
    }
}

function* signUp$ (action: SignUpRequest) {
    try {
        callApi.SIGN_UP(action.payload);
        yield put ({ type: ApiAction.REQUEST_API_CALL_STATUS })
        yield put ({ 
            type: UserActionType.SIGNUP_SUCCESS,
            payload: 200
        })
    } catch (error) {
        yield put ({ 
            type: UserActionType.SIGNUP_FAILURE,
            payload: error.message
        })
    } finally {
        yield put ({ type: ApiAction.CLEAR_API_CALL_STATUS })
    }
}

function* login$ (action: LoginRequest) {
    try {
        callApi.LOGIN(action.payload);
        yield put ({ type: ApiAction.REQUEST_API_CALL_STATUS })
        yield put ({
            type: UserActionType.LOGIN_SUCCESS,
            payload: action.payload
        })
    } catch (error) {
        yield put ({ 
            type: UserActionType.LOGIN_FAILURE,
            payload: error.message
        })
    } finally {
        yield put ({ type: ApiAction.CLEAR_API_CALL_STATUS })
    }
}

function* logout$ () {
    try {
        callApi.LOGOUT();
        yield put ({ type: ApiAction.REQUEST_API_CALL_STATUS })
        yield put ({ 
            type: UserActionType.LOGOUT_SUCCESS,
            payload: 200
        })
    } catch (error) {
        yield put ({ 
            type: UserActionType.LOGOUT_FAILURE,
            payload: error.message
        })
    } finally {
        yield put ({ type: ApiAction.CLEAR_API_CALL_STATUS })
    }
}