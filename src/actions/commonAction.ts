import { RecentDataModel } from '../core//models/RecentDataModel';

export const CommonActionType = {
    CLEAR_API_CALL_STATUS : 'CLEAR_API_CALL_STATUS' as const,

    GET_RECENT_POST_REQUEST : 'common/GET_RECENT_POST_REQUEST' as const,
    GET_RECENT_POST_SUCCESS : 'common/GET_RECENT_POST_SUCCESS' as const,
    GET_RECENT_POST_FAILURE : 'common/GET_RECENT_POST_FAILURE' as const,

    GET_RECENT_NOTICE_REQUEST : 'common/GET_RECENT_NOTICE_REQUEST' as const,
    GET_RECENT_NOTICE_SUCCESS : 'common/GET_RECENT_NOTICE_SUCCESS' as const,
    GET_RECENT_NOTICE_FAILURE : 'common/GET_RECENT_NOTICE_FAILURE' as const,
}


export const getRecentPost = () => ({
     type: CommonActionType.GET_RECENT_POST_REQUEST,
});

export const getRecentPostSuccess = (data: any) => ({
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

export const getRecentNoticeSuccess = (data: any) => ({ 
     type: CommonActionType.GET_RECENT_NOTICE_SUCCESS,
     payload: data
});

export const getRecentNoticeFailure = (data: any) => ({ 
     type: CommonActionType.GET_RECENT_NOTICE_FAILURE,
     payload: data
});

export type CommonAction = 
    | ReturnType<typeof getRecentPost>
    | ReturnType<typeof getRecentPostSuccess>
    | ReturnType<typeof getRecentPostFailure>
    | ReturnType<typeof getRecentNotice>
    | ReturnType<typeof getRecentNoticeSuccess>
    | ReturnType<typeof getRecentNoticeFailure>;
