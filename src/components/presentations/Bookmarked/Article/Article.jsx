import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import './article.scss';

const Article = ({ title, author, abstract, image, readTime }) => (
  <div className="bookmark-articles-list">
    <div className="article-details">
      <h3>{title}</h3>
      <p>{`${abstract.substring(0, 200)}...`}</p>

      <div className="author-details">
        <p>{author}</p>
        <p className="meta">{`${readTime} min read`}</p>
      </div>

      <div>
        <Button>Unbookmark</Button>
      </div>
    </div>
    <div className="article-img">
      <img src={image} alt="article logo" />
    </div>
  </div>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  abstract: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  readTime: PropTypes.number.isRequired,
};

export default Article;
