import React from 'react';
import './vipRoomPage.scss';
import { vipRoomSlider } from '../../components/slider/mock';
import Slider from '../../components/slider';

const VipRoomPage = () => {
  return (
    <div className="vipRoomPage">
      <div className="container">
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
