import {
    CommonAction,
    CommonActionType,
} from '../actions/commonAction';
import { RecentDataModel } from '../core/models/RecentDataModel';

type CommonState = {
    recentPosts : RecentDataModel[] | any;
    recentNotices : RecentDataModel[] | any;
};

const initialState : CommonState = {
    recentPosts: [],
    recentNotices: [],
};

export default function commonReducer(state: CommonState = initialState , action: CommonAction) {
    switch(action.type) {
        case CommonActionType.GET_RECENT_POST_REQUEST:
            return {
                ...state,
                
            };
        case CommonActionType.GET_RECENT_POST_SUCCESS:
            return {
                ...state,
                recentPosts: action.payload
            }
        case CommonActionType.GET_RECENT_POST_FAILURE:
            return {
                ...state,
                recentPosts: action.payload
            }
        case CommonActionType.GET_RECENT_NOTICE_REQUEST:
            return {...state};
        case CommonActionType.GET_RECENT_NOTICE_SUCCESS:
            return {
                ...state,
                recentNotices: action.payload
            };
        case CommonActionType.GET_RECENT_NOTICE_FAILURE:
            return {
                ...state,
                recentNotices: action.payload
            };
        default:
            return state;
    }
} 