import { UserActionType } from '../../core/api/actions/userAction';
import { UserModel } from '../../models/UserModel';

type UserState = {
    loggedUserEmail: string,
    isLogin: boolean
    userData: UserModel
}

const initialState : UserState = {
    loggedUserEmail: '',
    isLogin: false,
    userData: {
        _id: '',
        id: 0,
        userEmail: '',
        userPwd: '',
        userName: '',
        birthday: new Date(),
        createdAt: new Date()
    },
}

export interface EmailOverlapCheckRequest {
    type: typeof UserActionType.EMAIL_OVERLAP_CHECK_REQUEST,
    payload: string
}

export interface EmailOverlapCheckSuccess {
    type: typeof UserActionType.EMAIL_OVERLAP_CHECK_SUCCESS,
    payload: any
}

export interface EmailOverlapCheckFailure {
    type: typeof UserActionType.EMAIL_OVERLAP_CHECK_FAILURE,
    payload: any
}

export interface SignUpRequest {
    type: typeof UserActionType.SIGNUP_REQUEST,
    payload: UserModel
}

export interface SignUpSuccess {
    type: typeof UserActionType.SIGNUP_SUCCESS
    payload: any
}

export interface SignUpFailure {
    type: typeof UserActionType.SIGNUP_FAILURE,
    payload: any
}

export interface LoginRequest {
    type: typeof UserActionType.LOGIN_REQUEST,
    payload: any
}

export interface LoginSuccess {
    type: typeof UserActionType.LOGIN_SUCCESS,
    payload: any
}

export interface LoginFailure {
    type: typeof UserActionType.LOGIN_FAILURE,
    payload: any
}

export interface LogoutRequest {
    type: typeof UserActionType.LOGOUT_REQUEST,
    payload: any
}

export interface LogoutSuccess {
    type: typeof UserActionType.LOGOUT_SUCCESS,
    payload: any
}

export interface LogoutFailure {
    type: typeof UserActionType.LOGOUT_FAILURE,
    payload: any
}

type UserAction =
    | EmailOverlapCheckRequest
    | EmailOverlapCheckSuccess
    | EmailOverlapCheckFailure
    | SignUpRequest
    | SignUpSuccess
    | SignUpFailure
    | LoginRequest
    | LoginSuccess
    | LoginFailure
    | LogoutRequest
    | LogoutSuccess
    | LogoutFailure;
  

export default function userReducer(state: UserState = initialState , action: UserAction) {
    switch(action.type) {
        case UserActionType.EMAIL_OVERLAP_CHECK_REQUEST:
            return {
                ...state,
                userEmail: action.payload
            }
        case UserActionType.EMAIL_OVERLAP_CHECK_SUCCESS:
            return {
                ...state,
                userData: action.payload
            }
        case UserActionType.EMAIL_OVERLAP_CHECK_FAILURE:
            return {
                ...state,
                userData: action.payload
            }
        case UserActionType.SIGNUP_REQUEST:
            return {
                ...state,
                userData: action.payload
            }
        case UserActionType.SIGNUP_SUCCESS:
            return {
                ...state,
                userData: action.payload
            }
        case UserActionType.SIGNUP_FAILURE:
            return {
                ...state,
                userData: action.payload
            }
        case UserActionType.LOGIN_REQUEST:
            return {...state}
        case UserActionType.LOGIN_SUCCESS:
            return {
                ...state,
                isLogin: action.payload,
                loggedUserEmail: action.payload,
            }
        case UserActionType.LOGIN_FAILURE:
            return {...state}
        case UserActionType.LOGOUT_REQUEST:
            return {...state}
        case UserActionType.LOGOUT_SUCCESS:
            return {
                ...state,
                isLogin: action.payload,
                loggedUserEmail: action.payload
            }
        case UserActionType.LOGOUT_FAILURE:
            return {...state}
        default:
            return state;
    }
}
