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
            <NavLink to={'/welcome'}>Welcome</NavLink>
          </li>
          <li onClick={() => handleNavigate()}>
            <NavLink to={'/food-menu'}>Food Menu</NavLink>
          </li>
          <li onClick={() => handleNavigate()}>
            <NavLink to={'/drink-menu'}>Drink Menu</NavLink>
          </li>
          <li onClick={() => handleNavigate()}>
            <NavLink to={'/drink-menu'}>Venue</NavLink>
          </li>
          <li onClick={() => handleNavigate()}>
            <NavLink to={'/drink-menu'}>Events</NavLink>
          </li>
          <li onClick={() => handleNavigate()}>
            <NavLink to={'/drink-menu'}>Gift Cards</NavLink>
          </li>
          <li onClick={() => handleNavigate()}>
            <NavLink to={'/drink-menu'}>Dress Code</NavLink>
          </li>
          <li onClick={() => handleNavigate()}>
            <NavLink to={'/drink-menu'}>Book a Table</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
