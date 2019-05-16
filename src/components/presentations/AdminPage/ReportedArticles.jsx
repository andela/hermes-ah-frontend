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
        />
      ))}
    </div>
  );
};

ReportedArticles.propTypes = {
  reportedArticle: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default ReportedArticles;
