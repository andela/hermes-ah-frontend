import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import './userprofile.scss';

const SuggestedArticleCard = ({
  title,
  firstname,
  lastname,
  readingTime,
  body,
}) => {
  return (
    <div className="sgg-profile-card">
      <h3>{title}</h3>
      <span>{`${body.substring(0, 200)}...`}</span>

      <div className="sgg-footer">
        <Button>Read More...</Button>
        <div className="sgg-footer-item-container">
          <span className="sgg-footer-item">{firstname}</span>
          &nbsp;
          <span className="sgg-footer-item">{lastname}</span>
          &nbsp;
          <span className="sgg-footer-item">
            {readingTime}
            mins read
          </span>
        </div>
      </div>
    </div>
  );
};

SuggestedArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  readingTime: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default SuggestedArticleCard;
