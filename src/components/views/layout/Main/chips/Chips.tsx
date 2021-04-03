import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { MOBILE_MIN_WIDTH , MOBILE_MAX_WIDTH } from '../../../../../core/constant/constants';
import ChipsPc from './ChipsPc';
import ChipsMobile from './ChipsMobile';

export default function Chips() {
    const isPc = useMediaQuery({query: MOBILE_MIN_WIDTH});
    const isMobile = useMediaQuery({query: MOBILE_MAX_WIDTH});

    return (
        <>
            {isPc && <ChipsPc />}
            {isMobile && <ChipsMobile />}
        </>
    )
}