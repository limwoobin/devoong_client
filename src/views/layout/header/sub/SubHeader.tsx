import React from 'react';
import Container from '@material-ui/core/Container';
import '../scss/header.scss';

export default function SubHeader() {
	return (
		<Container maxWidth="lg">
			<header className="sub_head">
				<div className="sub_head_area">
					<div className="main_text">
						<a href="/">
							Drogbalog
						</a>
					</div>
				</div>
			</header>
		</Container>
	);
}