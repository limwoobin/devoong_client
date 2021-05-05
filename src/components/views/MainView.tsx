import React from 'react';
import './main.scss';
import RecentPostsContainer from '../../containers/RecentPostsContainer';
import Posts from './posts/Posts';
import Tags from './tags/Tags';
import Socials from './socials/Socials';
import {useMediaQuery} from 'react-responsive';
import { MOBILE_MIN_WIDTH , MOBILE_MAX_WIDTH } from '../../core/constant/constants';

export default function MainView() {
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
                        <Posts />
                    </div>
                    <div className="sideBar">
                        <RecentPostsContainer />
                        <Tags />
                        <Socials />
                    </div>
                </div>
            </div>
}

const MobileRecentPosts = () => {
    return <div>
                <RecentPostsContainer />
                <Tags />
                <Posts />
           </div>
}
