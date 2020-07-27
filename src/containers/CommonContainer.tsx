import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { RootState } from '../reducers';
import { getRecentPost } from '../actions/commonAction';
import MainSide from '../components/views/layout/Main/MainSide';

export default function CommonConatiner() {
    const recentPosts: [] = useSelector((state: RootState) => state.commonReducer.recentPosts);
    const dispatch = useDispatch();

    const onRecentPosts = () => {
        dispatch(getRecentPost());
    }

    return (
        <MainSide 
            recentPosts={recentPosts}
            onRecentPosts={onRecentPosts}
        />
    )
}