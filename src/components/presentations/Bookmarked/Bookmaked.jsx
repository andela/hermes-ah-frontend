import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article/Article';
import './bookmarked.scss';

const Bookmarked = ({ bookmarkedArticles }) => {
  const { articles } = bookmarkedArticles;

  return (
    <div className="bookmark-articles">
      <div className="header-card">
        <div className="icon">
          <i className="fas fa-bookmark" />
        </div>
        <div className="rider">
          <h2>Bookmarks - Articles here are private and only visible to you</h2>
        </div>
      </div>
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
