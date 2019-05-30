import React from 'react';
import PropTypes from 'prop-types';
import ReviewedArticleCard from './ReviewedArticlesCard';

const ReviewedArticles = ({ reportedArticle }) => {
  const allReviewedArticle = reportedArticle.filter(
    item => item.status === 'reviewed'
  );
  return (
    <div className="reviewed-main-grid">
      {allReviewedArticle.map(item => (
        <ReviewedArticleCard
          key={item.id}
          topic={item.article.title}
          abstract={`${item.article.abstract.charAt(0).toUpperCase() +
            item.article.abstract.slice(1)}`}
          reviewedBy={`${item.reviewer.first_name} ${item.reviewer.last_name}`}
          comment={`${item.reviewer_comment.charAt(0).toUpperCase() +
            item.reviewer_comment.slice(1)}`}
          dateReviewed={`${new Date(item.updatedAt).toDateString()}`}
          AcceptBtnValue="Accept"
          RejectBtnValue="Reject"
        />
      ))}
    </div>
  );
};

ReviewedArticles.propTypes = {
  reportedArticle: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default ReviewedArticles;
