import React from 'react';

const Card = ({ children, className = '', ...props }) => {
  return (
    <div className={`bg-gray-800 border border-gray-700 rounded-lg shadow-md ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Card;
