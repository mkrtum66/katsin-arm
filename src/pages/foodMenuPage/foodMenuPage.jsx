import React, { useEffect, useState } from 'react';
import './foodMenuPage.scss';
import ScrollToHeader from '../../components/scrollToHeader';
import { foodMenu } from './mock';
import { scrollToSection } from '../../utils/scrollToSection';
import video from '../../assets/video/smokeD720p.mp4';
import Spinner from 'react-bootstrap/Spinner';

const FoodMenuPage = () => {
  const [myRef, setMyRef] = useState();
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    scrollToSection(myRef);
  }, [myRef]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(false);
    }, 800);
  }, []);

  return (
    <div className="foodMenuPage">
      <ScrollToHeader links={foodMenu} setMyRef={setMyRef} />
      {!isLoaded ? (
        <>
          <video className="video-background" autoPlay muted loop playsInline preload={'auto'}>
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
          <Spinner animation="border" variant="danger" />
        </div>
      )}
    </div>
  );
};

export default FoodMenuPage;
