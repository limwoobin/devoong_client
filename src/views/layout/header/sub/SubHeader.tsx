import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import '../scss/header.scss';

export default function SubHeader() {
	return (
		<Container maxWidth="lg">
			<header className="sub_head">
				<div className="sub_head_area">
					<a href="/">Drogbalog</a>
				</div>
			</header>
		</Container>
	);
}