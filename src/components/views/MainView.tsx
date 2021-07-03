import React from 'react';
import './main.scss';
import Posts from './posts/Posts';
import Tags from './tags/Tags';
import RecentPosts from './recentPosts/RecentPosts';
import Socials from './socials/Socials';
import { useMediaQuery } from 'react-responsive';
import { constants } from '../../core/constant';

import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';

export default function MainView() {
    const isPc = useMediaQuery({query: constants.MIN_WIDTH});
    const isMobile = useMediaQuery({query: constants.MAX_WIDTH});

    return (
        <BrowserRouter>
            <Header />
                {isPc && <PcMainView />}
                {isMobile && <MobileMainView />}
            <Footer />
        </BrowserRouter>
    )
}

const PcMainView = () => {
    return <div>
                <div className="lpgbkm">
                    <div className="BAccj">
                        {/* <Posts /> */}
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
                {/* <Posts /> */}
           </div>
}
