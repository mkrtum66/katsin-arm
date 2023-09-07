import React from 'react';
import './socials.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import facebook from '../../assets/icons/facebook.png';
import instagram from '../../assets/icons/instagram.png';
import yelp from '../../assets/icons/yelp.png';

const Socials = () => {
  return (
    <div className="socials">
      <a href="https://www.yelp.com/" target="_blank" rel="noreferrer">
        <LazyLoadImage src={yelp} alt="img" width={'32px'} height={'32px'} effect="opacity" />
      </a>
      <a href="https://www.facebook.com/katsinusa" target="_blank" rel="noreferrer">
        <LazyLoadImage src={facebook} alt="img" width={'32px'} height={'32px'} effect="opacity" />
      </a>
      <a href="https://www.instagram.com/katsinusa/" target="_blank" rel="noreferrer">
        <LazyLoadImage src={instagram} alt="img" width={'32px'} height={'32px'} effect="opacity" />
      </a>
    </div>
  );
};

export default Socials;
