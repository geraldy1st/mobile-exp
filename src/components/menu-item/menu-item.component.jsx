import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ logo, imageUrl }) => (
  <div className={`menu-item`}>
    <div
      className="backgroundImage"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <img className="logoBrand" src={logo} alt="" />
    </div>
  </div>
);

export default MenuItem;
