import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { constants } from '../../../core/constant';
import TagsPc from './TagsPc';
import TagsMobile from './TagsMobile';

export default function Tags() {
    const isPc = useMediaQuery({query: constants.mobileMinWidth});
    const isMobile = useMediaQuery({query: constants.mobileMaxWidth});

    return (
        <>
            {isPc && <TagsPc />}
            {isMobile && <TagsMobile />}
        </>
    )
}