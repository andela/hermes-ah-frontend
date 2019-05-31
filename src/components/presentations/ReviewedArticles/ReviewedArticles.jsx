import React from 'react';
import PropTypes from 'prop-types';
import ReviewedArticleCard from './ReviewedArticlesCard';

const ReviewedArticles = ({ reportedArticle, openModal }) => {
  const allReviewedArticle = reportedArticle.filter(
    item => item.status !== 'pending' || item.status === 'reviewed'
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
          AcceptBtnValue={item.admin_comment ? 'Reviewed by Admin' : 'Review'}
          openModal={() => openModal(item.article.id)}
          adminComment={item.admin_comment}
          status={item.status}
        />
      ))}
    </div>
  );
};

ReviewedArticles.propTypes = {
  reportedArticle: PropTypes.arrayOf(PropTypes.shape).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ReviewedArticles;
