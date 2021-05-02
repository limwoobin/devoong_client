import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { RootState } from '../../../../../store/module';
import { getRecentPost } from '../../../../../core/api/actions/commonAction';
import { RecentDataModel } from '../../../../../models/RecentDataModel';
import RecentPosts from './RecentPosts';

export default function RecentPostsContainer() {
    const apiCalling: boolean = useSelector((state: RootState) => state.appReducer.apiCalling);

    const recentPosts: RecentDataModel[] = useSelector((state: RootState) => state.commonReducer.recentPosts);

    const dispatch = useDispatch();

    const onRecentPosts = () => {
        dispatch(getRecentPost());
    }

    return (
        <RecentPosts
            apiCalling={apiCalling} 
            recentPosts={recentPosts}
            onRecentPosts={onRecentPosts}
        />
    )
}