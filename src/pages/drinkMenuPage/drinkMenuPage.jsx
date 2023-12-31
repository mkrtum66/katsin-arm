import React, { useEffect, useState } from 'react';
import './drinkMenuPage.scss';
import { scrollToSection } from '../../utils/scrollToSection';
import video from '../../assets/video/ice-water.mp4';
import { foodMenu } from '../foodMenuPage/mock';
import ScrollToHeader from '../../components/scrollToHeader';
import Loader from '../../components/loader';

const DrinkMenuPage = () => {
  const [myRef, setMyRef] = useState();
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    scrollToSection(myRef);
  }, [myRef]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(false);
    }, 500);
  }, []);

  return (
    <div className={`drinkMenuPage ${isLoaded ? 'bg' : ''}`}>
      <ScrollToHeader links={foodMenu} setMyRef={setMyRef} />
      {!isLoaded ? (
        <>
          <video
            className="video-background"
            autoPlay
            muted
            loop
            playsInline
            preload={'metadata'}
            // onLoadStart={() => setIsLoaded(true)}
            // onLoadCapture={() => console.log('asdasd')}
          >
            <source src={video} type="video/mp4" />
          </video>
          <div className="container">
            {foodMenu.map(item => {
              return (
                <div key={item.id} id={item.title.toUpperCase()} className="content">
                  <h2>{item.title.toUpperCase()}</h2>
                  <ul className="foodList">
                    {item.type.map(food => {
                      return (
                        <li key={food.id}>
                          <p className="foodName">{food.name.toUpperCase()}</p>
                          <p className="foodDescription">{food.description}</p>
                          <p className="foodPrice">{food.price}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <div className="pt-5 w-100 d-flex justify-content-center">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default DrinkMenuPage;
