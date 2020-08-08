import http from '../core/http/http';
import { UserModel } from '../core/models/UserModel';

const url = {
    GET_Customers       : '/dr/customer/customers',
    ADD_Customer        : '/dr/customer/insert',
    SIGN_UP             : '/dr/member/insert',
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


export const callApi = {
    GET_Customers       : () => http.get(url.GET_Customers),
    ADD_Customer        : (data: any) => http.post(url.ADD_Customer),
    SIGN_UP             : (data: UserModel) => http.post(url.SIGN_UP , data),
    LOGIN               : (data: any) => http.post(url.LOGIN , data),
    LOGOUT              : () => http.get(url.LOGOUT),
    USER_EMAIL_CHK      : (data: any) => http.get(url.USER_EMAIL_CHK + data),
    GET_Categories      : (data: any) => http.get(url.GET_Categories , {
        params: { 
            type: data
        }
    }),
    GET_MainPage        : () => http.get(url.GET_MainPage),
    GET_BoardList       : (data: any) => http.get(url.GET_BoardList + data),
    GET_BoardData       : (data: any) => http.get(url.GET_BoardData + data),
    BoardInsert         : (data: any) => http.post(url.BoardInsert , data),
    CommentInsert       : (data: any) => http.post(url.CommentInsert , data),
    GET_Comments        : (data: any) => http.get(url.GET_Comments + data),
    FindforPassword     : (data: any) => http.get(url.FindforPassword + data),
    Get_RecentNotice    : () => http.get(url.GET_RecentNotice),
    Get_RecentPosts     : () => http.get(url.GET_RecentPosts),
    Get_Posts           : (data: any) => http.get(url.Get_Posts + data),
}