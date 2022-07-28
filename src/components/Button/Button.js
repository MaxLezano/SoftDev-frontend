import React from 'react';

function Button({ classNameButton, description }) {
  return (
    <button className={classNameButton}>{description}</button>
  );
}

export default Button;