import React, { useState } from 'react';
import './scss/Header.scss';
import MainHeader from './MainHeader';
import SubHeader from './SubHeader';

function Header() {
  return (
    <div className="header_area">
      <MainHeader />
      <SubHeader />
    </div>
  )
}

export default Header;