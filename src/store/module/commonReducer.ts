import { CommonAction , CommonActionType } from '../../core/api/actions/commonAction';
import { RecentDataModel } from '../../models/RecentDataModel';
import { CategoryModel } from '../../models/CategoryModel';

type CommonState = {
    categories : CategoryModel[];
    recentPosts : RecentDataModel[] | any;
    recentNotices : RecentDataModel[] | any;
};

const initialState : CommonState = {
    categories: [],
    recentPosts: [],
    recentNotices: [],
};

export default function commonReducer(state: CommonState = initialState , action: CommonAction) {
    switch(action.type) {
        case CommonActionType.GET_CATEGORY_REQUEST:
            return {...state}
        case CommonActionType.GET_CATEGORY_SUCCESS:
            return {
                ...state,
                categories: action.payload
            }
        case CommonActionType.GET_CATEGORY_FAILURE:
            return {
                ...state,
                categories: action.payload
            }
        case CommonActionType.GET_RECENT_POST_REQUEST:
            return {...state};
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