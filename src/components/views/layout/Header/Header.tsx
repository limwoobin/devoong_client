import React, { useState } from 'react';
import './Sections/Header.scss';
import MainHeader from './MainHeader';
import SubHeader from './SubHeader';

function Header() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true)
  };

  const onClose = () => {
    setVisible(false)
  };

  return (
    <div className="header_area">
      <MainHeader />
      <SubHeader />
    </div>
  )
}

export default Header;