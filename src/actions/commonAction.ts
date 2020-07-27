
const GET_RECENT_POST = 'common/GET_RECENT_POST' as const;
const GET_RECENT_NOTICE = 'common/GET_RECENT_NOTICE' as const;

const getRecentPost = () => ({
     type: GET_RECENT_POST,
     payload: [1,2]
});

const getRecentNotice = () => ({ 
     type: GET_RECENT_NOTICE
});

export type CommonAction = 
    | ReturnType<typeof getRecentPost>
    | ReturnType<typeof getRecentNotice>;

export {
    GET_RECENT_POST,
    GET_RECENT_NOTICE,
    getRecentPost,
    getRecentNotice,
}