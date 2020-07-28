export const CommonActionType = {
    GET_RECENT_POST_REQUEST : 'common/GET_RECENT_POST_REQUEST' as const,
    GET_RECENT_POST_SUCCESS : 'common/GET_RECENT_POST_SUCCESS' as const,
    GET_RECENT_POST_FAILURE : 'common/GET_RECENT_POST_FAILURE' as const,

    GET_RECENT_NOTICE_REQUEST : 'common/GET_RECENT_NOTICE_REQUEST' as const,
    GET_RECENT_NOTICE_SUCCESS : 'common/GET_RECENT_NOTICE_SUCCESS' as const,
    GET_RECENT_NOTICE_FAILURE : 'common/GET_RECENT_NOTICE_FAILURE' as const,
}

export interface GetRecentPost {
     type: typeof CommonActionType.GET_RECENT_POST_REQUEST
}

export const getRecentPost = (): GetRecentPost => ({
     type: CommonActionType.GET_RECENT_POST_REQUEST
});

export const getRecentNotice = () => ({ 
     type: CommonActionType.GET_RECENT_NOTICE_REQUEST,
     payload: [5],
     payload2: [6]
});

export type CommonAction = 
    | ReturnType<typeof getRecentPost>
    | ReturnType<typeof getRecentNotice>;
