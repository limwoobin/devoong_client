import {
    CommonAction,
    GET_RECENT_NOTICE,
    GET_RECENT_POST
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
        case GET_RECENT_POST:
            return {
                ...state,
                recentPosts: state.recentPosts + action.payload
            }
        case GET_RECENT_NOTICE:
            return {
                ...state,
                recentNotices: [1,2,3,4,5]
            }
        default:
            return state;
    }
} 