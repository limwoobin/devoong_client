import {
    CommonAction,
    CommonActionType
} from '../actions/commonAction';
import { RecentDataModel } from '../core/models/RecentDataModel';

type CommonState = {
    // recentPosts : RecentDataModel[] | null;
    recentPosts : [] | any;
};

const initialState : CommonState = {
    recentPosts: ['1'],
};

export default function commonReducer(state: CommonState = initialState , action: CommonAction) {
    switch(action.type) {
        case CommonActionType.GET_RECENT_POST:
            return {
                ...state,
                recentPosts: [1,2,3]
            }
        default :
            return state;
    }
} 