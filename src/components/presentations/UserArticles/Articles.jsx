import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article/Article';
import './author-articles.scss';

const ArticleList = ({ articlesUpdate }) => {
  const { articles } = articlesUpdate;
  return (
    <div>
      {articles.map(article => (
        <Article
          key={article.id}
          title={article.title}
          date={article.updatedAt}
          isDraft={article.is_draft}
        />
      ))}
    </div>
  );
};

ArticleList.propTypes = {
  articlesUpdate: PropTypes.shape().isRequired,
};

export default ArticleList;
