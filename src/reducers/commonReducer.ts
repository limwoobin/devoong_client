import {
    CommonAction,
    CommonActionType
} from '../actions/commonAction';
import { RecentDataModel } from '../core/models/RecentDataModel';

type CommonState = {
    recentPosts : RecentDataModel[] | any;
    recentNotices : RecentDataModel[] | any;
};

const initialState : CommonState = {
    recentPosts: [1],
    recentNotices: [1 , 2],
};

export default function commonReducer(state: CommonState = initialState , action: CommonAction) {
    switch(action.type) {
        case CommonActionType.GET_RECENT_POST:
            return {
                ...state,
                recentPosts: state.recentPosts + action.payload
            }
        case CommonActionType.GET_RECENT_NOTICE:
            return {
                ...state,
                recentNotices: state.recentNotices + action.payload + action.payload2
            }
        default:
            return state;
    }
} 