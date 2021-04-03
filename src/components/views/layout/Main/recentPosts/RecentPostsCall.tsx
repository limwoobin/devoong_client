import React , { useEffect } from 'react';
import './MainPage.scss';
import RecentPosts from './RecentPosts';
import { RecentDataModel } from '../../../../../core/models/RecentDataModel';

type RecentPostsProps = {
    apiCalling: boolean,
    recentPosts: RecentDataModel[];
    onRecentPosts: () => void;
}

export default function RecentPostsCall({
    apiCalling,
    recentPosts,
    onRecentPosts,
}: RecentPostsProps) {

    useEffect(() => {

    } , []);

    return (
        <div>
            <RecentPosts
                apiCalling={apiCalling}
                recentPosts={recentPosts}
                onRecentPosts={onRecentPosts}
            />
        </div>
    )
}
