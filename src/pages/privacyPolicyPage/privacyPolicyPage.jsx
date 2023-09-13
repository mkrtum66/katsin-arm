import React from 'react';
import './privacyPolicyPage.scss';
import location from '../../assets/icons/location.png';
import phone from '../../assets/icons/call.png';
import email from '../../assets/icons/email.png';

const PrivacyPolicyPage = () => {
  return (
    <div className="privacyPolicyPage pageWrapper">
      <div className="container">
        <h2>Privacy Policy</h2>
        <p>Last Updated: 09/06/2023</p>
        <div>
          <p>
            Welcome to the website of{' '}
            <span className="fw-bold">Katsin Dining and Restaurant Bar</span> (hereinafter referred
            to as "we," "us," or "our"). At Katsin, we are committed to protecting the privacy of
            our website visitors and customers. This Privacy Policy outlines the types of
            information we collect, how we use and safeguard your personal information when you
            visit our website <a href="www.katsinusa.com">www.katsinusa.com.</a>
          </p>
          <p>
            By using the Website, you consent to the practices described in this Privacy Policy.
          </p>
        </div>
        <div className="my-5">
          <p className="fw-bold mb-3 text-decoration-underline">1. Information We Collect</p>
          <p>
            <span className="fw-bold">a. Personal Information:</span>We may collect personal
            information that you provide voluntarily, such as your name, email address, phone
            number, and any other information you submit through our contact forms,when making
            reservations, signing up for our newsletters or participating in surveys or promotions.
          </p>
          <p>
            <span className="fw-bold">b. Automatically Collected Non-Personal Information: </span>We
            may also collect non-personal information on how you use our website, including your IP
            address, browser type and operating system when you access the Website. This information
            helps us improve our website and user experience.
          </p>
        </div>
        <div className="my-5">
          <p className="fw-bold mb-3 text-decoration-underline">2. How We Use Your Information</p>
          <p>We may use the information we collect for various purposes, including:</p>
          <p>
            <span className="fw-bold">a. Reservation and Communication:</span>To make reservations,
            confirm bookings, and communicate with you about your reservation.
          </p>
          <p>
            <span className="fw-bold">b. Marketing and Promotions: </span>To send you promotional
            materials, newsletters, and updates about our restaurant and special offers, but only if
            you have provided your consent to receive such communications.
          </p>
          <p>
            <span className="fw-bold">c. Analytics: </span>To analyze website usage, improve our
            website, and enhance our services.
          </p>
        </div>
        <div className="my-5">
          <p className="fw-bold mb-3 text-decoration-underline">
            3. Cookies and Tracking Technologies
          </p>
          <p>
            We may use cookies and similar tracking technologies to enhance your user experience.
            You can manage your cookie preferences by adjusting your browser settings.
          </p>
        </div>
        <div className="my-5">
          <p className="fw-bold mb-3 text-decoration-underline">4. Third-Party Disclosure</p>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to outside
            parties. However, we may share your information with trusted third parties who assist us
            in operating our website, conducting our business, or servicing you, provided they agree
            to keep this information confidential.
          </p>
        </div>
        <div className="my-5">
          <p className="fw-bold mb-3 text-decoration-underline">5. Security </p>
          <p>
            We implement reasonable security measures to protect your personal information. However,
            no data transmission over the internet or storage system is completely secure, and we
            cannot guarantee the absolute security of your information.
          </p>
        </div>
        <div className="my-5">
          <p className="fw-bold mb-3 text-decoration-underline">6. Your Rights </p>
          <p>
            You have the right to access, correct, update, or delete your personal information that
            we have collected. If you wish to exercise any of these rights or have any questions
            about our privacy practices, please contact us at{' '}
            <a href="mailto:info@katsinusa.com">info@katsinusa.com</a>.
          </p>
        </div>
        <div className="my-5">
          <p className="fw-bold mb-3 text-decoration-underline">7. Children’s Privacy</p>
          <p>
            We do not knowingly collect or store any personal information from anyone under the age
            of 13. If we become aware that we have collected or stored personal information from an
            individual under age 13, we will remove his or her personal information from our files.
            If you are a parent or guardian and believe we may have inadvertently collected personal
            information from your child, please notify us immediately by sending an email to{' '}
            <a href="mailto:info@katsinusa.com">info@katsinusa.com</a>.
          </p>
        </div>
        <div className="my-5">
          <p className="fw-bold mb-3 text-decoration-underline">8. Privacy Policy Changes</p>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices
            or for legal reasons. Any changes will be effective immediately upon posting the updated
            policy on our website.
          </p>
        </div>
        <div className="my-5">
          <p className="fw-bold mb-3 text-decoration-underline">9. Contact Us</p>
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy or our
            data practices, please contact us at:
          </p>
        </div>
        <div>
          <h4>Katsin Dining Restaurant and Bar</h4>
          <div>
            <a
              href="https://www.google.com/maps/place/515+W+Broadway,+Glendale,+CA+91204/@34.1469975,-118.2658522,17z/data=!3m1!4b1!4m6!3m5!1s0x80c2c059cd1794bf:0xa2e2eb7f04a67441!8m2!3d34.1469975!4d-118.2658522!16s%2Fg%2F11csksbsjl?entry=ttu"
              target="_blank"
              rel="noreferrer"
              className="location-link"
            >
              <img src={location} alt="img" />
              <span>515 W Broadway Ave, Unit 111, Glendale, CA 91204</span>
            </a>
          </div>
          <div>
            <a href="tel:+4733378901" className="phone-link">
              <img src={phone} alt="img" />
              <span>+47 333 78 901</span>
            </a>
          </div>
          <div>
            <a href="mailto:info@katsinusa.com" className="email-link">
              <img src={email} alt="img" />
              <span>info@katsinusa.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
