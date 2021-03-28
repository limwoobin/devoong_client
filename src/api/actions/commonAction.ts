import { RecentDataModel } from '../../core/models/RecentDataModel';
import { CategoryModel } from '../../core/models/CategoryModel';

export const CommonActionType = {
    GET_CATEGORY_REQUEST : 'GET_CATEGORY_REQUEST' as const,
    GET_CATEGORY_SUCCESS : 'GET_CATEGORY_SUCCESS' as const,
    GET_CATEGORY_FAILURE : 'GET_CATEGORY_FAILURE' as const,

    GET_RECENT_POST_REQUEST : 'common/GET_RECENT_POST_REQUEST' as const,
    GET_RECENT_POST_SUCCESS : 'common/GET_RECENT_POST_SUCCESS' as const,
    GET_RECENT_POST_FAILURE : 'common/GET_RECENT_POST_FAILURE' as const,

    GET_RECENT_NOTICE_REQUEST : 'common/GET_RECENT_NOTICE_REQUEST' as const,
    GET_RECENT_NOTICE_SUCCESS : 'common/GET_RECENT_NOTICE_SUCCESS' as const,
    GET_RECENT_NOTICE_FAILURE : 'common/GET_RECENT_NOTICE_FAILURE' as const,
}

export const getCategories = () => ({
     type: CommonActionType.GET_CATEGORY_REQUEST     
})

export const getCategoriesSuccess = (data: CategoryModel[]) => ({
     type: CommonActionType.GET_CATEGORY_SUCCESS,
     payload: data
})

export const getCategoriesFailure = (data: any) => ({
     type: CommonActionType.GET_CATEGORY_FAILURE,
     payload: data
})

export const getRecentPost = () => ({
     type: CommonActionType.GET_RECENT_POST_REQUEST,
});

export const getRecentPostSuccess = (data: RecentDataModel[]) => ({
     type: CommonActionType.GET_RECENT_POST_SUCCESS,
     payload: data
});

export const getRecentPostFailure = (data: any) => ({
     type: CommonActionType.GET_RECENT_POST_FAILURE,
     payload: data
});

export const getRecentNotice = () => ({ 
     type: CommonActionType.GET_RECENT_NOTICE_REQUEST,
});

export const getRecentNoticeSuccess = (data: RecentDataModel[]) => ({ 
     type: CommonActionType.GET_RECENT_NOTICE_SUCCESS,
     payload: data
});

export const getRecentNoticeFailure = (data: any) => ({ 
     type: CommonActionType.GET_RECENT_NOTICE_FAILURE,
     payload: data
});

export type CommonAction = 
    | ReturnType<typeof getCategories>
    | ReturnType<typeof getCategoriesSuccess>
    | ReturnType<typeof getCategoriesFailure>
    | ReturnType<typeof getRecentPost>
    | ReturnType<typeof getRecentPostSuccess>
    | ReturnType<typeof getRecentPostFailure>
    | ReturnType<typeof getRecentNotice>
    | ReturnType<typeof getRecentNoticeSuccess>
    | ReturnType<typeof getRecentNoticeFailure>;
