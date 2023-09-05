import { v4 as uuid } from 'uuid';
import slide1 from '../../assets/images/cuisine/1.jpeg';
import slide2 from '../../assets/images/cuisine/2.jpeg';
import slide3 from '../../assets/images/cuisine/3.jpeg';
import slide4 from '../../assets/images/cuisine/4.jpeg';

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
