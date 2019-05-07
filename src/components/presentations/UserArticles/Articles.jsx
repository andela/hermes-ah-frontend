import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article/Article';
import './author-articles.scss';

const ArticleList = ({ articlesUpdate }) => {
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
    <div>
      {articles.map(article => {
        const myDate = new Date(article.updatedAt);
        const myMonth = monthNames[myDate.getMonth()];
        const myDay = myDate.getDate();
        const myYear = myDate.getFullYear();
        return (
          <Article
            key={article.id}
            title={article.title}
            date={`Updated ${myDay} ${myMonth} ${myYear}`}
            isDraft={article.is_draft}
          />
        );
      })}
    </div>
  );
};

ArticleList.propTypes = {
  articlesUpdate: PropTypes.shape().isRequired,
};

export default ArticleList;
