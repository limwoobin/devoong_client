import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { MOBILE_MIN_WIDTH , MOBILE_MAX_WIDTH } from '../../../core/constant/constants';
import TagsPc from './TagsPc';
import TagsMobile from './TagsMobile';

export default function Tags() {
    const isPc = useMediaQuery({query: MOBILE_MIN_WIDTH});
    const isMobile = useMediaQuery({query: MOBILE_MAX_WIDTH});

    return (
        <>
            {isPc && <TagsPc />}
            {isMobile && <TagsMobile />}
        </>
    )
}