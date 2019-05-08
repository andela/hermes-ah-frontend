import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, abstract, image, readTime }) => (
  <div>
    <p>{title}</p>
    <p>{abstract}</p>
    <p>{image}</p>
    <p>{readTime}</p>
  </div>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  abstract: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  readTime: PropTypes.number.isRequired,
};

export default Article;
