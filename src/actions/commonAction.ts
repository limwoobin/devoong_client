const CommonActionType = {
    GET_RECENT_POST : 'common/GET_RECENT_POST' as const,
    GET_RECENT_NOTICE : 'common/GET_RECENT_NOTICE' as const
}

const getRecentPost = () => ({
     type: CommonActionType.GET_RECENT_POST,
     payload: [1,2]
});

// import axios from 'axios';
// const getData = () => {
//     const data = axios.get('https://yts.mx/api/v2/list_movies.json');
//     console.log('data' , data);
//     return data;
// }

const getRecentNotice = () => ({ 
     type: CommonActionType.GET_RECENT_NOTICE,
     payload: [5],
     payload2: [6]
});

type CommonAction = 
    | ReturnType<typeof getRecentPost>
    | ReturnType<typeof getRecentNotice>;

export {
    CommonActionType,
    CommonAction,
    getRecentPost,
    getRecentNotice,
}