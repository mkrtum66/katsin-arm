import React, { useState } from 'react';
import './header.scss';
import HamburgerButton from '../hamburgerButton';
import Button from '../button';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import logo from '../../assets/logo-gold.png';
import location from '../../assets/icons/location.png';
import phone from '../../assets/icons/call.png';
import usFlag from '../../assets/icons/us-flag.svg';
import rusFlag from '../../assets/icons/rus-flag.svg';
import armFlag from '../../assets/icons/arm-flag.png';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { Dropdown } from 'react-bootstrap';

const Header = ({ showSideBar, setShowSideBar }) => {
  const [activeLng, setActiveLng] = useState(i18n.language);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const lngs = {
    en: {
      nativeName: 'English',
      flag: usFlag,
    },
    ru: {
      nativeName: 'Russian',
      flag: rusFlag,
    },
    hy: {
      nativeName: 'Armenian',
      flag: armFlag,
    },
  };

  const handleClick = () => {
    window.open(
      'https://restaurant.opentable.com/v2/',
      '_blank', // <- This is what makes it open in a new window.
    );
  };

  const handleLogoClick = () => {
    navigate('/');
    setShowSideBar(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleChangeLanguage = lng => {
    i18n.changeLanguage(lng);
    setActiveLng(lng);
  };

  return (
    <header tabIndex="0" className="header">
      <HamburgerButton isActive={showSideBar} onClick={() => setShowSideBar(!showSideBar)} />
      <a
        href="https://www.google.com/maps/place/Katsin+Restaurant/@40.179765,44.5099792,19.91z/data=!4m15!1m8!3m7!1s0x406abcfbf7f7bfa7:0x621287d0a9083be3!2s4,+6+Amiryan+St,+Yerevan+0001,+Armenia!3b1!8m2!3d40.1795514!4d44.5102382!16s%2Fg%2F11r63j0y84!3m5!1s0x406abde086cd6025:0xca014a370e8a581!8m2!3d40.1798355!4d44.5107282!16s%2Fg%2F11rmzkfx17?entry=ttu"
        target="_blank"
        rel="noreferrer"
        className="location-link"
      >
        <img src={location} alt="img" />
        <span>{t('address')}</span>
      </a>
      <div className="logo" onClick={() => handleLogoClick()}>
        <LazyLoadImage src={logo} alt="img" width={'auto'} height={'100%'} effect="opacity" />
      </div>
      <a href="tel:+37477881001" className="phone-link">
        <img src={phone} alt="img" />
        <span>+374-77-881-001</span>
      </a>
      <div className="language-select">
        <Dropdown>
          <Dropdown.Toggle id="language-dropdown">
            <img src={lngs[activeLng].flag} alt="img" />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {Object.keys(lngs).map(lng => {
              return (
                <Dropdown.Item
                  key={lng}
                  className={`flag-wrapper ${i18n.resolvedLanguage === lng ? 'active' : ''}`}
                  onClick={() => handleChangeLanguage(lng)}
                >
                  <img src={lngs[lng].flag} alt="img" />
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <Button onClick={handleClick}>{t('book_now')}</Button>
    </header>
  );
};

export default Header;
