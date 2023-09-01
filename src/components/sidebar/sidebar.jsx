import React from 'react';
import './sidebar.scss';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ showSideBar, setShowSideBar }) => {
  const handleNavigate = () => {
    setShowSideBar(false);
  };

  return (
    <div className={`sidebar ${showSideBar ? 'open' : ''}`}>
      <div className="bg" onClick={() => setShowSideBar(false)} />
      <div className="sidebar-content">
        <ul>
          <li onClick={() => handleNavigate()}>
            <NavLink to={'/'}>Welcome</NavLink>
          </li>
          <li onClick={() => handleNavigate()}>
            <NavLink to={'/food-menu'}>Food Menu</NavLink>
          </li>
          <li onClick={() => handleNavigate()}>
            <NavLink to={'/drink-menu'}>Drink Menu</NavLink>
          </li>
          <li onClick={() => handleNavigate()}>
            <NavLink to={'/contact'}>Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
