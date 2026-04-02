import React from 'react';
import './CommonCard.css';

const CommonCard = ({ as = 'div', className = '', children, ...props }) => {
  const Component = as;
  const mergedClassName = className ? `common-card ${className}` : 'common-card';

  return (
    <Component className={mergedClassName} {...props}>
      {children}
    </Component>
  );
};

export default CommonCard;
