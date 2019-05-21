import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article/Article';
import './author-articles.scss';

const ArticleList = ({ articlesUpdate, deleteArticle }) => {
  const { articles } = articlesUpdate;
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return (
    <div className="article-container">
      {articles.map(article => {
        const updateDate = new Date(article.updatedAt);
        const updateMonth = monthNames[updateDate.getMonth()];
        const updateDay = updateDate.getDate();
        const updateYear = updateDate.getFullYear();
        return (
          <Article
            key={article.id}
            title={article.title}
            date={`Updated ${updateDay} ${updateMonth} ${updateYear}`}
            isDraft={article.is_draft}
            articleId={article.id}
            buttonEvent={deleteArticle}
          />
        );
      })}
    </div>
  );
};

ArticleList.propTypes = {
  articlesUpdate: PropTypes.shape({
    articles: PropTypes.shape({
      title: PropTypes.string,
      date: PropTypes.string,
      isDraft: PropTypes.bool,
    }),
  }).isRequired,
  deleteArticle: PropTypes.func.isRequired,
};

export default ArticleList;
