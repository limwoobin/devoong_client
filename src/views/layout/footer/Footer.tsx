import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { constants } from '../../../core/constant';
import FooterMobile from './FooterMobile';

export default function FooterContainer() {
	const isMobile = useMediaQuery({query: constants.MAX_WIDTH});

	return (
		<footer>
			<div style={{ bottom: 0 , position: 'fixed' , width:'100%'}}>
			{isMobile && <FooterMobile />}
			</div>
		</footer>
	);
}