import React from 'react';
import './vipRoomPage.scss';
import { vipRoomSlider } from '../../components/slider/mock';
import Slider from '../../components/slider';

const VipRoomPage = () => {
  return (
    <div className="vipRoomPage">
      <div className="container">
        <div className="info">
          <h3>Welcome to our Restaurant VIP Room!</h3>
          <p className="mb-4">
            At Katsin, we believe in providing an exceptional dining experience that goes above and
            beyond. Our VIP Room is an exclusive haven designed to cater to your every culinary
            desire, ensuring your visit is nothing short of extraordinary.
          </p>
          <p className="mb-0">
            Step into a world of elegance and refinement, where every detail has been meticulously
            crafted to create an atmosphere of sophistication and comfort. Whether you're
            celebrating a special occasion, hosting a private gathering, or simply seeking a
            secluded space to savor our exquisite cuisine, our VIP Room is the perfect choice.
          </p>
        </div>
        <Slider
          title={'VIP ROOM'}
          data={vipRoomSlider}
          buttonValue="Call"
          onClick={() => window.open('tel:+18183311000', '_self')}
        />
      </div>
    </div>
  );
};

export default VipRoomPage;
