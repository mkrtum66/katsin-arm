import React from 'react';
import './button.scss';

const Button = props => {
  return (
    <button
      {...props}
      className={`myBtn ${!props.variant && 'outline'} ${!!props.theme ? props.theme : ''}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
