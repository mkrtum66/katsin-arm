import React from 'react';
import './homePage.scss';

const HomePage = () => {
  return (
    <div className="homePage">
      <video className="video-background" autoPlay muted loop playsInline>
        <source
          src="https://video-previews.elements.envatousercontent.com/h264-video-previews/a530bad3-ef00-4f94-bc8f-f30b05037f09/21228054.mp4"
          type="video/mp4"
        />
      </video>
      <section style={{ height: '4000px' }}></section>
    </div>
  );
};

export default HomePage;
