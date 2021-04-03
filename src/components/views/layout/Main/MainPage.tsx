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
                <div className="sc-jlyJG lpgbkm">
                    <main className="sc-gipzik BAccj">

                    </main>
                    <MainSideContainer />
                </div>
            </div>
}

const MobileRecentPosts = () => {
    return <div>
                Mobile
           </div>
}

export default MainPage;