import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import './slider.scss';
import Button from '../button';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Slider = ({ title, data, buttonValue, onClick }) => {
  return (
    <div className="cuisineSlider">
      <p className="sectionLabel">{title}</p>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        modules={[EffectFade, Navigation, Autoplay]}
        className="mySwiper"
        centeredSlides={true}
        navigation={true}
        loop={true}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
      >
        {data.map(item => {
          return (
            <SwiperSlide key={item.id}>
              <LazyLoadImage src={item.imgSrc} alt="img" effect="opacity" />
            </SwiperSlide>
          );
        })}
        {!!buttonValue?.length ? (
          <Button className="slider-button" onClick={onClick}>
            {buttonValue}
          </Button>
        ) : (
          ''
        )}
        <div className="gradient"></div>
      </Swiper>
    </div>
  );
};

export default Slider;
