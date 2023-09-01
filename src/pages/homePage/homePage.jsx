import React from 'react';
import './homePage.scss';
import video from '../../assets/video/video.mp4';

const HomePage = () => {
  return (
    <div className="homePage">
      <video className="video-background" autoPlay muted loop playsInline>
        <source src={video} type="video/mp4" />
      </video>
      <section className="section1">
        <h1>katsin</h1>
        <div className="button" onClick={() => console.log('asdasdads')}>
          Book NoW
        </div>
      </section>
      <section style={{ height: '4000px' }}></section>
    </div>
  );
};

export default HomePage;
