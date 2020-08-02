import * as types from '../actions/commonAction';

export interface AppState {
    apiCalling: boolean
}

const initialState : AppState = {
    apiCalling: false
}

export interface RequestApiCallStatusAction {
    type: typeof types.CommonActionType.REQUEST_API_CALL_STATUS
}

export interface ClearApiCallStatusAction {
    type: typeof types.CommonActionType.CLEAR_API_CALL_STATUS
}

type AppActionTypes = RequestApiCallStatusAction | ClearApiCallStatusAction

const appReducer = (state: AppState = initialState , action: AppActionTypes): AppState => {
    switch(action.type) {
        case types.CommonActionType.REQUEST_API_CALL_STATUS:
            return {
                ...state,
                apiCalling: true,
            }
        case types.CommonActionType.CLEAR_API_CALL_STATUS:
            return {
                ...state,
                apiCalling: false,
            }
    }
}

export default appReducer;