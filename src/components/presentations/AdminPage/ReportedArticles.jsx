import React from 'react';
import PropTypes from 'prop-types';
import Reportedcard from '../UserProfile/ReportedCard';

const ReportedArticles = props => {
  const { reportedArticle } = props;
  return (
    <div className="main-grid">
      {reportedArticle.map(article => (
        <Reportedcard
          key={article.id}
          topic={article.reporter_reason}
          reason={article.reporter_comment}
          status={article.status}
          articleId={article.reported_article_id}
        />
      ))}
    </div>
  );
};

ReportedArticles.defaultProps = {
  reportedArticle: [],
};

ReportedArticles.propTypes = {
  reportedArticle: PropTypes.arrayOf(PropTypes.shape()),
};

export default ReportedArticles;
