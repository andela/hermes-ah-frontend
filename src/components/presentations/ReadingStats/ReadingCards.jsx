import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../Bookmarked/Article/article.scss';

const ReadingStatsCard = ({ title, articleId }) => (
  <div className="bookmark-articles-list">
    <div className="article-details-card">
      <i className="fas fa-book-reader book-icon" />
      <Link to={`/article/${articleId}`}>
        <h3>{title}</h3>
      </Link>
    </div>
  </div>
);

ReadingStatsCard.propTypes = {
  title: PropTypes.string.isRequired,
  articleId: PropTypes.string.isRequired,
};

export default ReadingStatsCard;
