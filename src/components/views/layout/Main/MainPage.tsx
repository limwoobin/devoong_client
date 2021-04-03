import React from 'react';
import './MainPage.scss';
import RecentPostsContainer from './recentPosts/RecentPostsContainer';
import {useMediaQuery} from 'react-responsive';
import {MOBILE_MIN_WIDTH , MOBILE_MAX_WIDTH} from '../../../../core/constant/constants';

const MainPage : React.FC = () => {
    const isPc = useMediaQuery({query: MOBILE_MIN_WIDTH});
    const isMobile = useMediaQuery({query: MOBILE_MAX_WIDTH});

    return (
        <>
            {isPc && <PcRecentPosts />}
            {isMobile && <MobileRecentPosts />}
        </>
    )
}

const PcRecentPosts = () => {
    return <div>
                <div className="lpgbkm">
                    <div className="BAccj">
                        
                    </div>
                    <RecentPostsContainer />
                </div>
            </div>
}

const MobileRecentPosts = () => {
    return <div>
                <RecentPostsContainer />
                'AA'
           </div>
}

export default MainPage;