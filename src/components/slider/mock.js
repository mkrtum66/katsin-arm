import { v4 as uuid } from 'uuid';
import slide1 from '../../assets/images/cuisine/1.jpeg';
import slide2 from '../../assets/images/cuisine/2.jpeg';
import slide3 from '../../assets/images/cuisine/3.jpeg';
import slide4 from '../../assets/images/cuisine/4.jpeg';

import venue1 from '../../assets/images/venue/Venue - 1.jpg';
import venue2 from '../../assets/images/venue/Venue - 2.jpg';
import venue3 from '../../assets/images/venue/Venue - 3.jpg';
import venue4 from '../../assets/images/venue/Venue - 4.jpg';

export const cuisineSlider = [
  {
    id: uuid(),
    imgSrc: slide1,
  },
  {
    id: uuid(),
    imgSrc: slide2,
  },
  {
    id: uuid(),
    imgSrc: slide3,
  },
  {
    id: uuid(),
    imgSrc: slide4,
  },
];

export const venueSlider = [
  {
    id: uuid(),
    imgSrc: venue1,
  },
  {
    id: uuid(),
    imgSrc: venue2,
  },
  {
    id: uuid(),
    imgSrc: venue3,
  },
  {
    id: uuid(),
    imgSrc: venue4,
  },
];
