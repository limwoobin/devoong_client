import React , { useEffect } from 'react';
import './MainPage.scss';
import RecentPost from './side/RecentPost';
// import RecentNotice from './side/RecentNotice';
// import XX from './side/XX';
import { RecentDataModel } from '../../../../core/models/RecentDataModel';

type MainSideProps = {
    recentPosts: [];
    onRecentPosts: () => void;
}

export default function MainSide({
    recentPosts,
    onRecentPosts
}: MainSideProps) {

    useEffect(() => {

    } , []);

    return (
        <div>
            <aside className="sc-csuQGl pDRpR">
                    <div className="sc-cHGsZl bHiaRe">
                        <div className="sc-TOsTZ eyrfCG">
                            <RecentPost 
                                recentPosts={recentPosts}
                                onRecentPosts={onRecentPosts}
                            />
                            {/* <RecentNotice />
                            <XX /> */}
                        </div>
                    </div>
                </aside>
        </div>
    )
}
