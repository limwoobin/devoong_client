import React from 'react';
import '../main.scss';
import { useMediaQuery } from 'react-responsive';
import { constants } from '../../../core/constant';
import RecentPostsPc from './RecentPostsPc';
import RecentPostsMobile from './RecentPostsMobile';


export default function RecentPosts(props: any) {
    const isPc = useMediaQuery({query: constants.mobileMinWidth});
    const isMobile = useMediaQuery({query: constants.mobileMaxWidth});

    return (
        <>
            {isPc && <RecentPostsPc />}
            {isMobile && <RecentPostsMobile />}
        </>
    )
}
