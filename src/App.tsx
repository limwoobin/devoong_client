import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '@/views/layout/header/Header';
import './styles/style.scss';
import Main from '@/views/Main';
import Container from '@material-ui/core/Container';

export default function App() {
	const basename = process.env.NODE_ENV === 'production' ? 'devoong_client' : '';

	return (
		<div style={{backgroundColor: '#363636'}}>
			{/* <Router basename="devoong_client"> */}
			<Router basename={basename}>
				<Header />
				<Container maxWidth="lg">
					<div style={{paddingBottom: '20px' , minHeight: '100%'}}>
						<Main />
					</div>
				</Container>
			</Router>
			{/* <Footer /> */}
		</div>
	);
}