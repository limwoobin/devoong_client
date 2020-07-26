const GET_RECENT_POST = 'main/GET_RECENT_POST' as const;
const GET_RECENT_NOTICE = 'main/GET_RECENT_NOTICE' as const;

const getRecentPost = () => ({ type: GET_RECENT_POST });
const getRecentNotice = () => ({ type: GET_RECENT_NOTICE });

type CommonAction = 
  |  ReturnType<typeof getRecentPost>
  |  ReturnType<typeof getRecentNotice>;


export {
    GET_RECENT_POST,
    GET_RECENT_NOTICE,
    getRecentPost,
    getRecentNotice,
    CommonAction
}