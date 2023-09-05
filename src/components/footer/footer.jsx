import React, { useState } from 'react';
import './footer.scss';
import location from '../../assets/icons/location.png';
import phone from '../../assets/icons/call.png';
import { Form } from 'react-bootstrap';
import Button from '../button';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
    setEmail('');
    setIsSubmitted(true);
    console.log(email);
  };

  const handleChange = e => {
    setEmail(e.target.value);
  };

  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-5 mb-md-0">
            <div className="col1">
              <a
                href="https://www.google.com/maps/place/515+W+Broadway,+Glendale,+CA+91204/@34.1469975,-118.2658522,17z/data=!3m1!4b1!4m6!3m5!1s0x80c2c059cd1794bf:0xa2e2eb7f04a67441!8m2!3d34.1469975!4d-118.2658522!16s%2Fg%2F11csksbsjl?entry=ttu"
                target="_blank"
                rel="noreferrer"
                className="location-link"
              >
                <p>Address:</p>
                <div>
                  <img src={location} alt="img" />
                  <span>
                    515 W Broadway Ave, Unit 111, <br />
                    Glendale, CA <br />
                    91204
                  </span>
                </div>
              </a>
              <a href="tel:+4733378901" className="phone-link">
                <img src={phone} alt="img" />
                <span>+47 333 78 901</span>
              </a>
            </div>
          </div>
          <div className="col-md-3 mb-5 mb-md-0">
            <div className="hours-wrapper">
              <p className="title">Hours:</p>
              <div className="hours">
                <p>Monday - Sunday</p>
                <p style={{ height: '24px' }}></p>
                <p>4:00PM - 0:00AM</p>
              </div>
              <p className="closed m-0">Closed for most major holidays</p>
            </div>
          </div>
          <div className="col-md-3 mb-5 mb-md-0">
            <p className="title">Newslatters:</p>
            {!isSubmitted ? (
              <Form className="newsLatterForm" onSubmit={event => handleSubmit(event)}>
                <Form.Group className="mb-3" controlId="newsletter">
                  <Form.Control
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={e => handleChange(e)}
                  />
                </Form.Group>
                <Button onClick={event => handleSubmit(event)}>Subscribe</Button>
              </Form>
            ) : (
              <div className="thank-you">Thank you for subscription</div>
            )}
          </div>
          <div className="col-md-3">
            <ul className="footer-links">
              <li>
                <NavLink to={'/'}>Jobs</NavLink>
              </li>
              <li>
                <NavLink to={'/'}>Privacy Policy</NavLink>
              </li>
              <li>
                <NavLink to={'/'}>Terms of Services</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="poweredBy mt-5 mb-0">
        Powered by <a href="https://www.linkedin.com/in/mkrtum-abrahamyan/">M. A.</a>
      </p>
    </div>
  );
};

export default Footer;
