import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { RootState } from '../reducers';
import { getRecentPost , getRecentNotice } from '../actions/commonAction';
import MainSide from '../components/views/layout/Main/MainSide';

export default function CommonConatiner() {
    const recentPosts: [] = useSelector((state: RootState) => state.commonReducer.recentPosts);
    const recentNotices: [] = useSelector((state: RootState) => state.commonReducer.recentNotices);

    const dispatch = useDispatch();

    const onRecentPosts = () => {
        dispatch(getRecentPost());
    }

    const onRecentNotices = () => {
        dispatch(getRecentNotice());
    }

    return (
        <MainSide 
            recentPosts={recentPosts}
            onRecentPosts={onRecentPosts}
            recentNotices={recentNotices}
            onRecentNotices={onRecentNotices}
        />
    )
}