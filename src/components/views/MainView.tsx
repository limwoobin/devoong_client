import React from 'react';
import './main.scss';
import Posts from './posts/Posts';
import Tags from './tags/Tags';
import RecentPosts from './recentPosts/RecentPosts';
import Socials from './socials/Socials';
import { useMediaQuery } from 'react-responsive';
import { constants } from '../../core/constant';
import Router from './Router';

export default function MainView() {
    const isPc = useMediaQuery({query: constants.MIN_WIDTH});
    const isMobile = useMediaQuery({query: constants.MAX_WIDTH});

    return (
        <>
            {isPc && <PcMainView />}
            {isMobile && <MobileMainView />}
        </>
    )
}

const PcMainView = () => {
    return <div>
                <div className="lpgbkm">
                    <div className="BAccj">
                        <Router />
                    </div>
                    <div className="sideBar">
                        <Tags />
                        <RecentPosts />
                        <Socials />
                    </div>
                </div>
            </div>
}

const MobileMainView = () => {
    return <div>
                <Tags />
                <RecentPosts />
                <Router />
           </div>
}
