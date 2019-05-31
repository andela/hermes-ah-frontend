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
  openModal,
  adminComment,
  status,
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
          <div>
            <p className="date-revwd">
              Status:
              <span>{` ${status}`}</span>
            </p>
          </div>
        </div>
        <div className="reviewr-commt">
          <span>Comment:</span>
          <p>{comment}</p>
        </div>
        {adminComment ? (
          <div className="reviewr-commt">
            <span>Admin Comment:</span>
            <p>{adminComment}</p>
          </div>
        ) : null}
      </div>
      <div className="admin-art-decision">
        <div className="main_button">
          {AcceptBtnValue === 'Review' ? (
            <button
              type="submit"
              className="accept-rev-art"
              onClick={openModal}
            >
              {AcceptBtnValue}
            </button>
          ) : (
            <button type="submit" className="accept-reviewd-art">
              {AcceptBtnValue}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

ReviewedArticleCard.defaultProps = {
  adminComment: null,
};

ReviewedArticleCard.propTypes = {
  topic: PropTypes.string.isRequired,
  abstract: PropTypes.string.isRequired,
  reviewedBy: PropTypes.string.isRequired,
  dateReviewed: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  adminComment: PropTypes.string,
  AcceptBtnValue: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};

export default ReviewedArticleCard;
