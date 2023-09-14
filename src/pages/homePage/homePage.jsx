import React, { useEffect } from 'react';
import './homePage.scss';
import video from '../../assets/video/video.mp4';
import Slider from '../../components/slider';
import { cuisineSlider, venueSlider } from '../../components/slider/mock';
import { scrollToSection } from '../../utils/scrollToSection';

import nkar from '../../assets/images/cocktail.jpg';
import { useTranslation } from 'react-i18next';

const HomePage = ({ sideRef }) => {
  const { t } = useTranslation();

  useEffect(() => {
    scrollToSection(sideRef);
  }, [sideRef]);

  return (
    <div className="homePageWrapper">
      <div className="homePage">
        <video className="video-background" autoPlay muted loop playsInline>
          <source src={video} type="video/mp4" />
        </video>
        <section className="section1">
          <h3 className="animate-charcter">{t('katsin')}</h3>
          <div className="button" onClick={() => console.log('asdasdads')}>
            {t('book_now')}
          </div>
        </section>
      </div>
      <section className="section2">
        <div className="container">
          <Slider
            title={t('cuisine')}
            data={cuisineSlider}
            buttonValue={t('menu')}
            onClick={() => console.log('from Cuisine')}
          />
        </div>
      </section>
      <div className="img-section">
        <div className="container">
          <div className="gradient-image">
            <div className="bg"></div>
            <img src={nkar} alt="img" className="img-fluid img-gradient" />
          </div>
        </div>
      </div>
      <section id="venue" className="sectionVanue">
        <div className="container">
          <Slider
            title={t('venue')}
            data={venueSlider}
            buttonValue={t('book_now')}
            onClick={() => console.log('from Vanue')}
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
