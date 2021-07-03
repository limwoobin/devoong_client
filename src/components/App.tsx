import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './views/layout/header/Header';
import Router from './views/Router';
import Footer from './views/layout/footer/Footer';
import '../styles/style.scss';
import MainView from './views/MainView';

const App = () => {
  return (
    <div style={{backgroundColor: '#363636'}}>
       {/* <BrowserRouter>
          <Header />
          <div style={{paddingBottom: '20px'}}>
            <Router />
          </div>
          <Footer />
       </BrowserRouter> */}
       <MainView />
    </div>
  );
};


export default App;