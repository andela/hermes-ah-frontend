import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article/Article';

const Bookmarked = ({ bookmarkedArticles }) => {
  const { articles } = bookmarkedArticles;

  return (
    <div>
      {articles.map(item => (
        <Article
          key={item.article_id}
          title={item.Article.title}
          abstract={item.Article.abstract}
          image={item.Article.image_url}
          readTime={item.Article.reading_time}
        />
      ))}
    </div>
  );
};

Bookmarked.propTypes = {
  bookmarkedArticles: PropTypes.shape().isRequired,
};

export default Bookmarked;
