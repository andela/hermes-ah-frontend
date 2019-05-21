import React from 'react';
import PropTypes from 'prop-types';
import './reviewers-card.scss';

const ReviewerRequestCard = ({
  initials,
  imageUrl,
  bio,
  name,
  button,
  button1,
  btnClass1,
  btnClass,
  adminAcceptRequest,
  adminRejectRequest,
}) => {
  return (
    <div className="main-title">
      <div className="image_title_bio">
        <div className="profile_image">
          {imageUrl ? (
            <img className="user_pic" src={imageUrl} alt="" />
          ) : (
            <p className="initials">{initials}</p>
          )}
        </div>
        <div className="title_text_box">
          <p className="name">{name}</p>
          {bio ? <p className="user_bio">{bio}</p> : null}
        </div>
      </div>
      <div className="admin_decision_on_request">
        <div className="main_button">
          <button
            type="submit"
            className={btnClass}
            onClick={() => adminAcceptRequest()}
          >
            {button}
          </button>
        </div>
        {'   '}
        <div className="main_button">
          <button
            type="submit"
            className={btnClass1}
            onClick={() => adminRejectRequest()}
          >
            {button1}
          </button>
        </div>
      </div>
    </div>
  );
};

ReviewerRequestCard.propTypes = {
  initials: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
  button1: PropTypes.string.isRequired,
  btnClass: PropTypes.string.isRequired,
  btnClass1: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  adminAcceptRequest: PropTypes.func.isRequired,
  adminRejectRequest: PropTypes.func.isRequired,
};

export default ReviewerRequestCard;
