import React from 'react';
import PropTypes from 'prop-types';
import './reviewed-articles-card.scss';

const ReviewedArticleCard = ({
  topic,
  abstract,
  reviewedBy,
  dateReviewed,
  comment,
  AcceptBtnValue,
  RejectBtnValue,
}) => {
  return (
    <div className="reviewd-art-card-cont">
      <div className="reviewd-art-details">
        <h2 className="topic">{topic}</h2>
        <p className="abstrt">{abstract}</p>
        <div className="card-reviwedby-date">
          <div>
            <p>
              Reviewed By:
              <span>{` ${reviewedBy}`}</span>
            </p>
          </div>
          <div>
            <p className="date-revwd">
              Date Reviewed:
              <span>{` ${dateReviewed}`}</span>
            </p>
          </div>
        </div>
        <div className="reviewr-commt">
          <span>Comment:</span>
          <p>{comment}</p>
        </div>
      </div>
      <div className="admin-art-decision">
        <div className="main_button">
          <button type="submit" className="accept-rev-art">
            {AcceptBtnValue}
          </button>
        </div>
        <div className="main_button">
          <button type="submit" className="reject-rev-art">
            {RejectBtnValue}
          </button>
        </div>
      </div>
    </div>
  );
};

ReviewedArticleCard.propTypes = {
  topic: PropTypes.string.isRequired,
  abstract: PropTypes.string.isRequired,
  reviewedBy: PropTypes.string.isRequired,
  dateReviewed: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  AcceptBtnValue: PropTypes.string.isRequired,
  RejectBtnValue: PropTypes.string.isRequired,
};

export default ReviewedArticleCard;
