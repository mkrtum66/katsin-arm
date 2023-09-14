import React from 'react';
import './scrollToHeader.scss';
import { useTranslation } from 'react-i18next';

const ScrollToHeader = ({ links, setMyRef }) => {
  const { t } = useTranslation();

  return (
    <div className="scrollToHeader">
      <div className="container">
        <ul>
          {links.map(item => {
            return (
              <li key={item.id} onClick={() => setMyRef(item.id)}>
                {t(item.title).toUpperCase()}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ScrollToHeader;
