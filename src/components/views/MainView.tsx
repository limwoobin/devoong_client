import React from 'react';
import './main.scss';
import RecentPostsContainer from '../../containers/RecentPostsContainer';
import Posts from './posts/Posts';
import Tags from './tags/Tags';
import Socials from './socials/Socials';
import {useMediaQuery} from 'react-responsive';
import { constants } from '../../core/constant';

export default function MainView() {
    const isPc = useMediaQuery({query: constants.mobileMinWidth});
    const isMobile = useMediaQuery({query: constants.mobileMaxWidth});

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
