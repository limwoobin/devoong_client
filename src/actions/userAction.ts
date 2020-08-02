export const UserActionType = {
    SIGNUP_REQUEST : 'user/SIGNUP_REQUEST' as const,
    SIGNUP_SUCCESS : 'user/SIGNUP_SUCCESS' as const,
    SIGNUP_FAILURE : 'user/SIGNUP_FAILURE' as const,

    LOGIN_REQUEST : 'user/LOGIN_REQUEST' as const,
    LOGIN_SUCCESS : 'user/LOGIN_SUCCESS' as const,
    LOGIN_FAILURE : 'user/LOGIN_FAILURE' as const,

    LOGOUT_REQUEST : 'user/LOGOUT_REQUEST' as const,
    LOGOUT_SUCCESS : 'user/LOGOUT_SUCCESS' as const,
    LOGOUT_FAILURE : 'user/LOGOUT_FAILURE' as const,
}

export const signUp = () => ({ type: UserActionType.SIGNUP_REQUEST });

export const signUpSuccess = (data: any) => ({ 
    type: UserActionType.SIGNUP_SUCCESS,
    payload: data
});

export const signUpFailure = (data: any) => ({ 
    type: UserActionType.SIGNUP_FAILURE,
    payload: data
});


export const login = () => ({ type: UserActionType.LOGIN_REQUEST });

export const loginSuccess = (data: any) => ({
    type: UserActionType.LOGIN_SUCCESS,
    payload: data
});

export const loginFailure = (data: any) => ({
    type: UserActionType.LOGIN_FAILURE,
    payload: data
})


export const logout = (data: any) => ({ type: UserActionType.LOGOUT_REQUEST });

export const logoutSuccess = (data: any) => ({
    type: UserActionType.LOGOUT_SUCCESS,
    payload: data
});

export const logoutFailure = (data: any) => ({
    type: UserActionType.LOGOUT_FAILURE,
    payload: data
})

export type UserAction = 
    | ReturnType<typeof signUp>
    | ReturnType<typeof signUpSuccess>
    | ReturnType<typeof signUpFailure>
    | ReturnType<typeof login>
    | ReturnType<typeof loginSuccess>
    | ReturnType<typeof loginFailure>
    | ReturnType<typeof logout>
    | ReturnType<typeof logoutSuccess>
    | ReturnType<typeof logoutFailure>;