import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article/Article';
import './author-articles.scss';

const ArticleList = ({
  articlesUpdate,
  deleteArticle,
  open,
  size,
  showConfirmationModal,
  closeConfirmationModal,
}) => {
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
            size={size}
            open={open}
            showConfirmationModal={showConfirmationModal}
            closeConfirmationModal={closeConfirmationModal}
          />
        );
      })}
    </div>
  );
};

ArticleList.defaultProps = {
  size: '',
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
  showConfirmationModal: PropTypes.func.isRequired,
  closeConfirmationModal: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  size: PropTypes.string,
};

export default ArticleList;
