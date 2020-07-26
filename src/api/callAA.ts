import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:4000',
    timeout: 2500,
    headers: {
        Authorization: 'bearer accessKey',
        'Content-Type': 'application/json'
    }
});

instance.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
)

instance.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
)

const url = {
    GET_Customers       : '/dr/customer/customers',
    ADD_Customer        : '/dr/customer/insert',
    ADD_Member          : '/dr/member/insert',
    LOGIN               : '/dr/member/login',
    LOGOUT              : '/dr/member/logout',
    USER_EMAIL_CHK      : '/dr/member/overlap/check/',
    GET_Categories      : '/dr/category/list',
    GET_MainPage        : '/',
    GET_BoardList       : '/dr/board/list/',
    GET_BoardData       : '/dr/board/view/',
    BoardInsert         : '/dr/board/write',
    CommentInsert       : '/dr/comment/write',
    GET_Comments        : '/dr/comment/list/',
    FindforPassword     : '/dr/mail/password/find/',
    GET_RecentNotice    : '/dr/board/recent/notice',
    GET_RecentPosts     : '/dr/post/recent/posts',
    Get_Posts           : '/dr/post/list/',
}

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}

export const API = {
    GET_Customers       : () => axios.get(url.GET_Customers),
    ADD_Customer        : (data: any) => axios.post(url.ADD_Customer),
    ADD_Member          : (data: any) => axios.post(url.ADD_Member , data),
    LOGIN               : (data: any) => axios.post(url.LOGIN , data),
    LOGOUT              : () => axios.get(url.LOGOUT),
    USER_EMAIL_CHK      : (data: any) => axios.get(url.USER_EMAIL_CHK + data),
    GET_Categories      : (data: any) => instance.get(url.GET_Categories , {
        params: { 
            type: data
        }
    }),
    GET_MainPage        : () => axios.get(url.GET_MainPage),
    GET_BoardList       : (data: any) => axios.get(url.GET_BoardList + data),
    GET_BoardData       : (data: any) => axios.get(url.GET_BoardData + data),
    BoardInsert         : (data: any) => axios.post(url.BoardInsert , data),
    CommentInsert       : (data: any) => axios.post(url.CommentInsert , data),
    GET_Comments        : (data: any) => axios.get(url.GET_Comments + data),
    FindforPassword     : (data: any) => axios.get(url.FindforPassword + data),
    Get_RecentNotice    : () => axios.get(url.GET_RecentNotice),
    Get_RecentPosts     : () => axios.get(url.GET_RecentPosts),
    Get_Posts           : (data: any) => axios.get(url.Get_Posts + data),
}