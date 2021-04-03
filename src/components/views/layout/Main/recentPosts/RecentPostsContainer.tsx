import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { RootState } from '../../../../../reducers';
import { getRecentPost } from '../../../../../api/actions/commonAction';
import RecentPostsCall from './RecentPostsCall';
import { RecentDataModel } from '../../../../../core/models/RecentDataModel';

export default function CommonConatiner() {
    const apiCalling: boolean = useSelector((state: RootState) => state.appReducer.apiCalling);

    const recentPosts: RecentDataModel[] = useSelector((state: RootState) => state.commonReducer.recentPosts);

    const dispatch = useDispatch();

    const onRecentPosts = () => {
        dispatch(getRecentPost());
    }

    return (
        <RecentPostsCall
            apiCalling={apiCalling} 
            recentPosts={recentPosts}
            onRecentPosts={onRecentPosts}
        />
    )
}