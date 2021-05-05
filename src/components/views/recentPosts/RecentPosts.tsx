import React from 'react';
import '../main.scss';
import { useMediaQuery } from 'react-responsive';
import { MOBILE_MIN_WIDTH , MOBILE_MAX_WIDTH } from '../../../core/constant/constants';
import RecentPostsPc from './RecentPostsPc';
import RecentPostsMobile from './RecentPostsMobile';


export default function RecentPosts(props: any) {
    const isPc = useMediaQuery({query: MOBILE_MIN_WIDTH});
    const isMobile = useMediaQuery({query: MOBILE_MAX_WIDTH});

    return (
        <>
            {isPc && <RecentPostsPc />}
            {isMobile && <RecentPostsMobile />}
        </>
    )
}
