import React from 'react';
import './scrollToHeader.scss';

const ScrollToHeader = ({ links, setMyRef }) => {
  return (
    <div className="scrollToHeader">
      <div className="container">
        <ul>
          {links.map(item => {
            return (
              <li key={item.id} onClick={() => setMyRef(item.title.toUpperCase())}>
                {item.title.toUpperCase()}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ScrollToHeader;
