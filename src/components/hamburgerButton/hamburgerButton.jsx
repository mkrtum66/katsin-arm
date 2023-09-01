import React from 'react';
import './hamburgerButton.scss';

const HamburgerButton = ({ isActive, onClick }) => {
  return (
    <div className={`nav-icon ${isActive ? 'open' : ''}`} onClick={onClick}>
      <span />
      <span />
      <span />
      <span />
    </div>
  );
};

export default HamburgerButton;
