import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '@/views/layout/header/Header';
import './styles/style.scss';
import Main from '@/views/Main';
import Container from '@material-ui/core/Container';
import SEO from './views/SEO';
import '@/static/fonts/font.css';

export default function App() {
	return (
		<div style={{backgroundColor: '#363636' , fontFamily: "BMJUA"}}>
			<SEO />
			<Router>
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