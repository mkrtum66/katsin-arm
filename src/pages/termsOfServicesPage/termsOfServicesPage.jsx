import React from 'react';
import './termsOfServicesPage.scss';

const TermsOfServicesPage = () => {
  return (
    <div className="termsOfServicesPage">
      <div className="container">
        <h1 className="page-title mb-5">Terms of Service</h1>
        <h2 className="title mb-3">Acceptance of Terms</h2>
        <p className="description mb-5">
          By accessing and using the <span className="fw-bold">Katsin Restaurant and Bar</span>{' '}
          website (the "Website"),you agree to be bound by these Terms of Use, as amended from time
          to time with or without notice to you. Please read the website 's Privacy Policy, which is
          incorporated within these Terms of Use by reference. You agree that Katsin reserves the
          right to modify or discontinue this Website and its services, and to remove the data you
          provide, either temporarily or permanently, at any time, without notice and without any
          liability towards you. Katsin will not be held responsible or liable for timeliness of or
          removal of information, failure to store information, inaccuracy of information, or
          improper delivery of information.
        </p>
        <h2 className="title mb-3">Responsibilities and Registration Obligations</h2>
        <p className="description mb-5">
          In order to use this Website or certain parts of it, you may be required to register for a
          user account on this website; in this case, you agree to provide truthful information when
          requested, and -- if a minimum age is required for eligibility for a user account -- you
          undertake that you are at least the required age. By registering for a user account, you
          explicitly agree to this Website's Terms of Use, including any amendments made by Katsin
          that are published herein.
        </p>
        <h2 className="title mb-3">Privacy Policy</h2>
        <p className="description mb-5">
          Registration data and other personally identifiable information the Website may collect is
          subject to the terms of Katsin Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default TermsOfServicesPage;
