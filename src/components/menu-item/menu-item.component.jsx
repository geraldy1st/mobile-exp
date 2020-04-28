import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ logo, imageUrl, linkUrl, history, match }) => {
  console.log(match);
  return (
    <div
      className={`menu-item`}
      onClick={() => history.push(`/shop${match.url}${linkUrl}`)}
    >
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
};

export default withRouter(MenuItem);
