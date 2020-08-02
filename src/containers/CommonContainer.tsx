import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { RootState } from '../reducers';
import { getRecentPost , getRecentNotice } from '../actions/commonAction';
import MainSide from '../components/views/layout/Main/MainSide';
import { RecentDataModel } from '../core/models/RecentDataModel';

export default function CommonConatiner() {
    const apiCalling: boolean = useSelector((state: RootState) => state.appReducer.apiCalling);

    const recentPosts: RecentDataModel[] = useSelector((state: RootState) => state.commonReducer.recentPosts);
    const recentNotices: RecentDataModel[] = useSelector((state: RootState) => state.commonReducer.recentNotices);

    const dispatch = useDispatch();

    const onRecentPosts = () => {
        dispatch(getRecentPost());
    }

    const onRecentNotices = () => {
        dispatch(getRecentNotice());
    }

    return (
        <MainSide
            apiCalling={apiCalling} 
            recentPosts={recentPosts}
            onRecentPosts={onRecentPosts}
            recentNotices={recentNotices}
            onRecentNotices={onRecentNotices}
        />
    )
}