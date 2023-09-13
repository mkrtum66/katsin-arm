import React from 'react';
import './jobsPage.scss';

const JobsPage = () => {
  return (
    <div className="jobsPage pageWrapper">
      <div className="container">
        <div className="content">
          <h4>Join Katsin,</h4>
          <h4 className="mb-4">Where Culinary Dreams Come to Life!</h4>
          <p>
            Are you passionate about extraordinary dining experiences? Do you have an appetite for
            creativity and a flair for exceptional service?
          </p>
          <p>
            Join us at Katsin as we embark on a journey to delight taste buds and create memories
            that linger long after the last bite.
          </p>
          <p>
            If you would like to apply, please send your resume to{' '}
            <a href="mailto:info@katsinusa.com">info@katsinusa.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
