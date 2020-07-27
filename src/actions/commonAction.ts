export enum CommonActionType {
    GET_RECENT_POST = 'common/GET_RECENT_POST',
    GET_RECENT_NOTICE = 'common/GET_RECENT_NOTICE'
}

export const getRecentPost = () => ({ type: CommonActionType.GET_RECENT_POST });
export const getRecentNotice = () => ({ type: CommonActionType.GET_RECENT_NOTICE });

export type CommonAction = 
    | ReturnType<typeof getRecentPost>
    | ReturnType<typeof getRecentNotice>;



