export const CommonActionType = {
    GET_RECENT_POST : 'common/GET_RECENT_POST' as const,
    GET_RECENT_NOTICE : 'common/GET_RECENT_NOTICE' as const
}

export const getRecentPost = () => ({
     type: CommonActionType.GET_RECENT_POST,
     payload: [1,2]
});

export const getRecentNotice = () => ({ 
     type: CommonActionType.GET_RECENT_NOTICE,
     payload: [5],
     payload2: [6]
});

export type CommonAction = 
    | ReturnType<typeof getRecentPost>
    | ReturnType<typeof getRecentNotice>;
