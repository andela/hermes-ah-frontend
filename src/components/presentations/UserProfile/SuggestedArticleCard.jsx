import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import './userprofile.scss';

const SuggestedArticleCard = ({
  title,
  firstname,
  lastname,
  readingTime,
  body,
  articleId,
}) => {
  return (
    <div className="sgg-profile-card">
      <h3>{title}</h3>
      <span>{`${body.substring(0, 200)}...`}</span>

      <div className="sgg-footer">
        <Link to={`/article/${articleId}`}>
          <Button>Read More...</Button>
        </Link>
        <div className="sgg-footer-item-container">
          <span className="sgg-footer-item">
            <b>{firstname}</b>
          </span>
          <span className="sgg-footer-item">
            <b>{lastname}</b>
          </span>
          <span className="sgg-footer-item">
            {readingTime}
            mins read
          </span>
        </div>
      </div>
    </div>
  );
};

SuggestedArticleCard.defaultProps = {
  articleId: '',
};

SuggestedArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  readingTime: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  articleId: PropTypes.string,
};

export default SuggestedArticleCard;
