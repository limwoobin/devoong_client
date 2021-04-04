import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './views/layout/Header/Header';
import MainRouter from './views/layout/Main/MainRouter';
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