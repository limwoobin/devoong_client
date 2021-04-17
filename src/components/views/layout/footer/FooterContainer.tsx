import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { MOBILE_MIN_WIDTH , MOBILE_MAX_WIDTH } from '../../../../core/constant/constants';
import FooterMobile from './FooterMobile';

export default function FooterContainer() {
    const isMobile = useMediaQuery({query: MOBILE_MAX_WIDTH});

    return (
        <div style={{bottom: 0}}>
            {isMobile && <FooterMobile />}
        </div>
    )
}