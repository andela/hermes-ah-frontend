import React from 'react';
import ReviewedArticleCard from './ReviewedArticlesCard';
import data from '../../../utils/dummyData';

const ReviewedArticles = () => {
  const { reviewedArticles } = data;
  return (
    <div className="main-grid">
      {reviewedArticles.map(article => (
        <ReviewedArticleCard
          key={article.id}
          topic={article.topic}
          abstract={`${article.abstract.charAt(0).toUpperCase() +
            article.abstract.slice(1)}`}
          reviewedBy={article.reviewer}
          comment={`${article.comment.charAt(0).toUpperCase() +
            article.comment.slice(1)}`}
          dateReviewed={article.dateReviewed}
          AcceptBtnValue="Accept"
          RejectBtnValue="Reject"
        />
      ))}
    </div>
  );
};

export default ReviewedArticles;
