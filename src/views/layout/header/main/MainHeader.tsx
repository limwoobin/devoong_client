import React, { useState } from 'react';
import '../scss/header.scss';
import {useMediaQuery} from 'react-responsive';
import { constants } from '../../../../core/constant';
import { headers } from '../../../../core/constant';
import HeaderPC from './HeaderPc';
import HeaderMobile from './HeaderMobile';
import Container from '@material-ui/core/Container';

export default function MainHeader() {
	const isPc = useMediaQuery({query: constants.MIN_WIDTH});
	const isMobile = useMediaQuery({query: constants.MAX_WIDTH});

	return (
		<>
			<nav className="main_head">
				<Container maxWidth="lg">
					<div className="head_category">
						{isPc && <HeaderPC headers={headers} />}
						{isMobile && <HeaderMobile headers={headers} />}
					</div>
				</Container>
			</nav>
		</>
	);
}