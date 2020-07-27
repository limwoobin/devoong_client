const GET_RECENT_POST = 'common/GET_RECENT_POST' as const;

export const getRecentPost = () => ({ type: GET_RECENT_POST });

type CommonAction = ReturnType<typeof getRecentPost>;

export enum CommonActionType {
    GET_RECENT_POST = "common/GET_RECENT_POST",
}

export {
    CommonAction
}