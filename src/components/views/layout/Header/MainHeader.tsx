import React, { useState } from 'react';
import './scss/header.scss';
import MenuBtn from './MenuBtn';
import {useMediaQuery} from 'react-responsive';
import {MOBILE_MIN_WIDTH , MOBILE_MAX_WIDTH} from '../../../../core/constant/constants';
import { Link } from 'react-router-dom';

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
            <a href="">HOME</a>
            <Link to="about">ABOUT</Link>
            <Link to="tags">TAGS</Link>
            <Link to="my">MY</Link>
        </p>
    )
}
