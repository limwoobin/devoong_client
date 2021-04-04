import React, { useState } from 'react';
import './scss/Header.scss';
import MenuBtn from './MenuBtn';
import {useMediaQuery} from 'react-responsive';
import {MOBILE_MIN_WIDTH , MOBILE_MAX_WIDTH} from '../../../../core/constant/constants';

export default function MainHeader() {
    const isPc = useMediaQuery({query: MOBILE_MIN_WIDTH});
    const isMobile = useMediaQuery({query: MOBILE_MAX_WIDTH});

    return (
        <>
            <nav className="main_head">
                <div className="head_category">
                    {isPc && <HeaderBtns />}
                    {isMobile && <MenuBtn />}
                </div>
            </nav>
        </>
    )
}

function HeaderBtns() {
    return (
        <p>
            <a href="/">AAAAA</a>
            <a href="/">BBBBB</a>
            <a href="/">CCCCC</a>
            <a href="/">DDDDD</a>
        </p>
    )
}
