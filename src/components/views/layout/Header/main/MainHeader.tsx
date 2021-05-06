import React, { useState } from 'react';
import '../scss/header.scss';
import MenuBtn from './MenuBtn';
import {useMediaQuery} from 'react-responsive';
import { constants } from '../../../../../core/constant';
import { Link } from 'react-router-dom';
import { headers } from '../../../../../core/constant';

export default function MainHeader() {
    const isPc = useMediaQuery({query: constants.MIN_WIDTH});
    const isMobile = useMediaQuery({query: constants.MAX_WIDTH});

    return (
        <>
            <nav className="main_head">
                <div className="head_category">
                    {/* {isPc && <HeaderBtns headers={headers} />}
                    {isMobile && <MenuBtn headers={headers} />} */}
                </div>
            </nav>
        </>
    )
}

// function HeaderBtns() {
//     return (
//         <p>
//             <a href="">HOME</a>
//             <Link to="about">ABOUT</Link>
//             <Link to="tags">TAGS</Link>
//             <Link to="my">MY</Link>
//         </p>
//     )
// }
