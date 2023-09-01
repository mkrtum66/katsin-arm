import React, { useState } from 'react';
import './header.scss';
import HamburgerButton from '../hamburgerButton';

const Header = ({ showSideBar, setShowSideBar }) => {
  return (
    <header tabIndex="0" className="header">
      <HamburgerButton isActive={showSideBar} onClick={() => setShowSideBar(!showSideBar)} />
    </header>
  );
};

export default Header;
