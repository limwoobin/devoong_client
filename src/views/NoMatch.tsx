import React from 'react';
import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

export default function NoMatch() {
	const imageStyle = {
		height: '60%',
		width: '80%',
		display: 'block',
		marginLeft: 'auto',
		marginRight: 'auto'
	};

	const homeBtnStyle = {
		display: 'block',
		marginLeft: 'auto',
		marginRight: 'auto'
	};

	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth="md">
				<img src="public/devoong-404.png" style={imageStyle} />
				<Link to="/" style={{ textDecoration: 'none' }}>
					<button color="teal" className="homeBtn" style={homeBtnStyle}>Home</button>
				</Link>
			</Container>
		</React.Fragment>
	);
}