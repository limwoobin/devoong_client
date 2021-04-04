import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { RootState } from '../../../../../reducers';
import { getRecentPost } from '../../../../../api/actions/commonAction';
import { RecentDataModel } from '../../../../../core/models/RecentDataModel';
import RecentPosts from './RecentPosts';

export default function CommonConatiner() {
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