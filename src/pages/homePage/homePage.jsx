import React, { useEffect } from 'react';
import './homePage.scss';
import video from '../../assets/video/video.mp4';
import Slider from '../../components/slider';
import { cuisineSlider, venueSlider } from '../../components/slider/mock';
import { scrollToSection } from '../../utils/scrollToSection';

import nkar from '../../assets/images/cocktail.jpg';

const HomePage = ({ sideRef }) => {
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
          {/*<div className="katsin-animation">*/}
          {/*  <h1>katsin</h1>*/}
          {/*  <h1>katsin</h1>*/}
          {/*</div>*/}
          <h3 className="animate-charcter"> Katsin</h3>
          <div className="button" onClick={() => console.log('asdasdads')}>
            Book NoW
          </div>
        </section>
      </div>
      <section className="section2">
        <div className="container">
          <Slider
            title={'Cuisine'}
            data={cuisineSlider}
            buttonValue="menu"
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
            title={'Venue'}
            data={venueSlider}
            buttonValue="Book a Table"
            onClick={() => console.log('from Cuisine')}
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
