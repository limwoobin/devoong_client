import React, { useState } from 'react';
import './style/Header.scss';
import {useMediaQuery} from 'react-responsive';
import MenuBtn from './MenuBtn';

export default function MainHeader() {
    const isPc = useMediaQuery({query: "(min-width: 767px)"});
    const isMobile = useMediaQuery({query: "(max-width: 767px)"});

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
