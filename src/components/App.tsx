import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './views/layout/Header/Header';
import MainRouter from './views/layout/Main/MainRouter';
import '../styles/style.scss';

const App = () => {
  return (
    <div>
       <BrowserRouter>
        <Header />
          <div style={{paddingTop: '75px' , minHeight: 'calc(100vh - 80px)'}}>
          <MainRouter />
          </div>
       </BrowserRouter>        
      </div>
  );
};


export default App;