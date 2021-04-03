import React , { useEffect } from 'react';
import './MainPage.scss';
import RecentPosts from './recentPosts/RecentPosts';
import { RecentDataModel } from '../../../../core/models/RecentDataModel';

type MainSideProps = {
    apiCalling: boolean,
    recentPosts: RecentDataModel[];
    onRecentPosts: () => void;
    recentNotices: RecentDataModel[];
    onRecentNotices: () => void;
}

export default function MainSide({
    apiCalling,
    recentPosts,
    onRecentPosts,
    recentNotices,
    onRecentNotices,
}: MainSideProps) {

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
