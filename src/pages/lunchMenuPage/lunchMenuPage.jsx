import React from 'react';
import './lunchMenuPage.scss';
import { lunchMenu } from '../foodMenuPage/mock';

const LunchMenuPage = () => {
  return (
    <div className="lunchMenuPage pageWrapper">
      <div className="container">
        <ul className="foodList">
          {lunchMenu.map(food => {
            return (
              <li key={food.id}>
                {!!food.name.length ? <p className="foodName">{food.name.toUpperCase()}</p> : ''}
                {!!food.description.length ? (
                  <p className="foodDescription">{food.description}</p>
                ) : (
                  ''
                )}
                {!!food.price.length ? <p className="foodPrice">֏ {food.price}</p> : ''}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default LunchMenuPage;
