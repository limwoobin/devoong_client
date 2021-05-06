import React, { useState } from 'react';
import './scss/header.scss';
import MainHeader from './main/MainHeader';
import SubHeader from './sub/SubHeader';

function Header() {
  return (
    <div className="header_area">
      <MainHeader />
      <SubHeader />
    </div>
  )
}

export default Header;