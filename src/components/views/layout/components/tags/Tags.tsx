import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { constants } from '../../../../../core/constant';
import TagsPc from './TagsPc';
import TagsMobile from './TagsMobile';

export default function Tags() {
    const isPc = useMediaQuery({query: constants.MIN_WIDTH});
    const isMobile = useMediaQuery({query: constants.MAX_WIDTH});

    return (
        <>
            {isPc && <TagsPc />}
            {isMobile && <TagsMobile />}
        </>
    )
}