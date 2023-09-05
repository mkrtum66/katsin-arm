import React from 'react';
import './homePage.scss';
import video from '../../assets/video/video.mp4';
import CuisineSlider from '../../components/cuisineSlider';

const HomePage = () => {
  return (
    <div className="homePageWrapper">
      <div className="homePage">
        <video className="video-background" autoPlay muted loop playsInline>
          <source src={video} type="video/mp4" />
        </video>
        <section className="section1">
          <div className="katsin-animation">
            <h1>katsin</h1>
            <h1>katsin</h1>
          </div>
          {/*<h1>katsin</h1>*/}
          <div className="button" onClick={() => console.log('asdasdads')}>
            Book NoW
          </div>
        </section>
      </div>
      <section className="section2">
        <div className="container">
          <CuisineSlider />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
