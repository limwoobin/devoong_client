import React , { useEffect } from 'react';
import './MainPage.scss';
import RecentPost from './side/RecentPost';
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
            <aside className="sc-csuQGl pDRpR">
                <div className="sc-TOsTZ eyrfCG">
                    <RecentPost
                        apiCalling={apiCalling}
                        recentPosts={recentPosts}
                        onRecentPosts={onRecentPosts}
                    />
                </div>
            </aside>
        </div>
    )
}
