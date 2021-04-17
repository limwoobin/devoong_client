import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './views/layout/header/Header';
import MainRouter from './views/layout/main/MainRouter';
import FooterContainer from './views/layout/footer/FooterContainer';
import '../styles/style.scss';

const App = () => {
  return (
    <div style={{backgroundColor: '#363636'}}>
       <BrowserRouter>
          <Header />
          <div style={{paddingBottom: '20px'}}>
            <MainRouter />
          </div>
          <FooterContainer />
       </BrowserRouter>
    </div>
  );
};


export default App;