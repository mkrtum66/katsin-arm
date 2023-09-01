import React from 'react';
import './sidebar.scss';

const Sidebar = ({ showSideBar, setShowSideBar }) => {
  return (
    <div className={`sidebar ${showSideBar ? 'open' : ''}`}>
      <div className="bg" onClick={() => setShowSideBar(false)} />
      <div className="sidebar-content">
        <ul>
          <li>asdjkasdhkj</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
