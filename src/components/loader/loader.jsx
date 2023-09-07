import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import './loader.scss';

const Loader = () => {
  return (
    <div className="loader">
      <Spinner animation="border" />
    </div>
  );
};

export default Loader;
