import React from 'react';
import './main.scss';
import Posts from './posts/Posts';
import Tags from './tags/Tags';
import RecentPosts from './recentPosts/RecentPosts';
import Socials from './socials/Socials';
import {useMediaQuery} from 'react-responsive';
import { constants } from '../../core/constant';

export default function MainView() {
    const isPc = useMediaQuery({query: constants.MIN_WIDTH});
    const isMobile = useMediaQuery({query: constants.MAX_WIDTH});

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
                        <RecentPosts />
                        <Tags />
                        <Socials />
                    </div>
                </div>
            </div>
}

const MobileRecentPosts = () => {
    return <div>
                <RecentPosts />
                <Tags />
                <Posts />
           </div>
}
