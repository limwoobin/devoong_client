import {
    CommonAction,
    CommonActionType
} from '../actions/commonAction';
import { RecentDataModel } from '../core/models/RecentDataModel';

type CommonState = {
    recentPosts : [] | any;
    recentNotices : [] | any;
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
                recentPosts: [1,2,3]
            }
        case CommonActionType.GET_RECENT_NOTICE:
            return {
                ...state,
                recentNotices: [1,2,3,4,5]
            }
        default :
            return state;
    }
} 