import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { constants } from '../../../../core/constant';
import FooterMobile from './FooterMobile';

export default function FooterContainer() {
    const isMobile = useMediaQuery({query: constants.mobileMaxWidth});

    return (
        <div style={{bottom: 0}}>
            {isMobile && <FooterMobile />}
        </div>
    )
}