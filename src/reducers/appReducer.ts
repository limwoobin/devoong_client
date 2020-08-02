export const ApiAction = {
    REQUEST_API_CALL_STATUS : 'REQUEST_API_CALL_STATUS' as const,
    CLEAR_API_CALL_STATUS : 'CLEAR_API_CALL_STATUS' as const
}

export const RequestApiCallStatus = () => ({
    type: ApiAction.REQUEST_API_CALL_STATUS,
})

export const ClearApiCallStatus = () => ({
    type: ApiAction.CLEAR_API_CALL_STATUS,
})

export type ApiAction =
    | ReturnType<typeof RequestApiCallStatus>
    | ReturnType<typeof ClearApiCallStatus>

interface AppState {
    apiCalling: boolean
}

const initialState : AppState = {
    apiCalling: false
}

// export interface RequestApiCallStatusAction {
//     type: typeof types.CommonActionType.REQUEST_API_CALL_STATUS
// }

// export interface ClearApiCallStatusAction {
//     type: typeof types.CommonActionType.CLEAR_API_CALL_STATUS
// }

// type AppActionTypes = RequestApiCallStatusAction | ClearApiCallStatusAction

export default function appReducer (state: AppState = initialState , action: ApiAction) {
    switch(action.type) {
        case ApiAction.REQUEST_API_CALL_STATUS:
            return {
                ...state,
                apiCalling: true
            }
        case ApiAction.CLEAR_API_CALL_STATUS:
            return {
                ...state,
                apiCalling: false
            }
        default:
            return state;
    }
}
