import React from 'react';
import PropTypes from 'prop-types';
import './article.scss';

const Article = ({ title, abstract, image, readTime }) => (
  <div className="bookmark-articles-list">
    <div className="article-details">
      <h3>{title}</h3>
      <p>{`${abstract.substring(0, 200)}...`}</p>
      <p className="meta">{`${readTime} min read`}</p>
    </div>
    <div className="article-img">
      <img src={image} alt="article logo" />
    </div>
  </div>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  abstract: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  readTime: PropTypes.number.isRequired,
};

export default Article;
