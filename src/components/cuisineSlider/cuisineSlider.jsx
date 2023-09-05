import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import './cuisineSlider.scss';
import { cuisineSlider } from './mock';
import Button from '../button';

const CuisineSlider = () => {
  return (
    <div className="cuisineSlider">
      <p className="sectionLabel">CUISINE</p>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        modules={[EffectFade, Navigation, Autoplay]}
        className="mySwiper"
        centeredSlides={true}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {cuisineSlider.map(item => {
          return (
            <SwiperSlide key={item.id}>
              <img src={item.imgSrc} alt="img" />
            </SwiperSlide>
          );
        })}
        <Button className="slider-button">Menu</Button>
        <div className="gradient"></div>
      </Swiper>
    </div>
  );
};

export default CuisineSlider;
