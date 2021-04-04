import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './views/layout/header/Header';
import MainRouter from './views/layout/main/MainRouter';
import '../styles/style.scss';

const App = () => {
  return (
    <div style={{backgroundColor: '#363636'}}>
       <BrowserRouter>
          <Header />
          <MainRouter />
       </BrowserRouter>        
    </div>
  );
};


export default App;