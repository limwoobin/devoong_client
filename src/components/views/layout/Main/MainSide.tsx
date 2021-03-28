import React , { useEffect } from 'react';
import './MainPage.scss';
import RecentPost from './side/RecentPost';
import { RecentDataModel } from '../../../../core/models/RecentDataModel';
import {useMediaQuery} from 'react-responsive';

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

    const isPc = useMediaQuery({query: "(min-width: 767px)"});
    const isMobile = useMediaQuery({query: "(max-width: 767px)"});

    return (
        <div>
            {isPc && 
                <aside className="sc-csuQGl pDRpR">
                    <div className="sc-TOsTZ eyrfCG">
                        <RecentPost
                            apiCalling={apiCalling}
                            recentPosts={recentPosts}
                            onRecentPosts={onRecentPosts}
                        />
                    </div>
                </aside>
            }
        </div>
    )
}
