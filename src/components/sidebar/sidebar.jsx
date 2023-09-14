import React from 'react';
import './sidebar.scss';
import { NavLink } from 'react-router-dom';
import { scrollToSection } from '../../utils/scrollToSection';
import { useTranslation } from 'react-i18next';

const Sidebar = ({ showSideBar, setShowSideBar, setSideRef }) => {
  const { t } = useTranslation();

  const handleNavigate = () => {
    setShowSideBar(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const clickOnLink = id => {
    setShowSideBar(false);
    setSideRef(id);
    scrollToSection(id);
  };

  return (
    <div className={`sidebar ${showSideBar ? 'open' : ''}`}>
      <div className="bg" onClick={() => setShowSideBar(false)} />
      <div className="sidebar-content">
        <ul>
          <li onClick={() => handleNavigate()}>
            <NavLink to={'/welcome'}>{t('sd_welcome')}</NavLink>
          </li>
          <li onClick={() => handleNavigate()}>
            <NavLink to={'/food-menu'}>{t('food_menu')}</NavLink>
          </li>
          <li onClick={() => handleNavigate()}>
            <NavLink to={'/drink-menu'}>{t('drink_menu')}</NavLink>
          </li>
          <li onClick={() => clickOnLink('venue')}>
            <NavLink to={'/'}>{t('venue')}</NavLink>
          </li>
          <li onClick={() => handleNavigate()}>
            <NavLink to={'/events'}>{t('events')}</NavLink>
          </li>
          <li onClick={() => handleNavigate()}>
            <NavLink to={'https://pos.toasttab.com/'}>{t('katsin_cards')}</NavLink>
          </li>
          {/*<li onClick={() => handleNavigate()}>*/}
          {/*  <NavLink to={'/'}>Dress Code</NavLink>*/}
          {/*</li>*/}
          <li onClick={() => handleNavigate()}>
            <NavLink to={'/vip'}>{t('book_vip_room')}</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
