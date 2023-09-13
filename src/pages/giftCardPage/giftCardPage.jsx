import React from 'react';
import './giftCardPage.scss';

const GiftCardPage = () => {
  return (
    <div className="giftCardPage pageWrapper">
      <div className="container">
        <div className="giftCardContent">
          <span className="required-instruction">
            All fields are required, unless they are marked optional.
          </span>
          <h1 className="page-header" tabIndex="-1">
            Who is the gift card for?
          </h1>
          <form action=""></form>
        </div>
      </div>
    </div>
  );
};

export default GiftCardPage;
