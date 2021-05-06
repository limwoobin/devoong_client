import React from 'react';
import '../main.scss';
import { useMediaQuery } from 'react-responsive';
import { constants } from '../../../core/constant';
import RecentPostsPc from './RecentPostsPc';
import RecentPostsMobile from './RecentPostsMobile';


export default function RecentPosts(props: any) {
    const isPc = useMediaQuery({query: constants.MIN_WIDTH});
    const isMobile = useMediaQuery({query: constants.MAX_WIDTH});

    return (
        <>
            {isPc && <RecentPostsPc />}
            {isMobile && <RecentPostsMobile />}
        </>
    )
}
