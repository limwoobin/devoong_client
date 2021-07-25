import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './views/layout/header/Header';
import Footer from './views/layout/footer/Footer';
import './styles/style.scss';
import Main from './views/Main';

export default function App() {
	return (
		<div style={{backgroundColor: '#363636'}}>
				<BrowserRouter>
					<Header />
					<div style={{paddingBottom: '20px'}}>
						<Main />
					</div>
					<Footer />
				</BrowserRouter>
		</div>
	);
}