import React, { useEffect, useState } from 'react';
import './foodMenuPage.scss';
import ScrollToHeader from '../../components/scrollToHeader';
import { foodMenu } from './mock';
import { scrollToSection } from '../../utils/scrollToSection';
import video from '../../assets/video/steak-video.mp4';
import Loader from '../../components/loader';
import { useTranslation } from 'react-i18next';

const FoodMenuPage = () => {
  const [myRef, setMyRef] = useState();
  const [isLoaded, setIsLoaded] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    scrollToSection(myRef);
  }, [myRef]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(false);
    }, 500);
  }, []);

  return (
    <div className={`foodMenuPage ${isLoaded ? 'bg' : ''}`}>
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
            // onLoadStart={() => console.log('start')}
          >
            <source src={video} type="video/mp4" />
          </video>
          <div className="container">
            {foodMenu.map(item => {
              return (
                <div key={item.id} id={item.id} className="content">
                  <h2>{t(item.title).toUpperCase()}</h2>
                  <ul className="foodList">
                    {item.type.map(food => {
                      return (
                        <li key={food.id}>
                          {!!food.name.length ? (
                            <p className="foodName">{food.name.toUpperCase()}</p>
                          ) : (
                            ''
                          )}
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

export default FoodMenuPage;
