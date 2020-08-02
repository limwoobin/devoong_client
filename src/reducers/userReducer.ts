import { UserAction , UserActionType } from '../actions/userAction';
import { UserModel } from '../core/models/UserModel';

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

export default function userReducer(state: UserState = initialState , action: UserAction) {
    switch(action.type) {
        case UserActionType.SIGNUP_REQUEST:
            return {...state}
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
