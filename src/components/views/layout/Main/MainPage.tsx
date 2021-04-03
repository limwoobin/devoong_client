import React from 'react';
import './MainPage.scss';
import MainSideContainer from './recentPosts/RecentPostsContainer';
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
                    <MainSideContainer />
                </div>
            </div>
}

const MobileRecentPosts = () => {
    return <div>
                <MainSideContainer />
                'AA'
           </div>
}

export default MainPage;