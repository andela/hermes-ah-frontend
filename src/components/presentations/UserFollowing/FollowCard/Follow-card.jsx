import React from 'react';
import PropTypes from 'prop-types';
import './follow-card.scss';

const Follow = ({
  initials,
  imageUrl,
  name,
  bio,
  button,
  btnClass,
  followeeId,
  buttonEvent,
}) => {
  return (
    <div className="main-card">
      <div className="img-section">
        {imageUrl ? (
          <img className="profile-pic" src={imageUrl} alt="" />
        ) : (
          <p className="initials">{initials}</p>
        )}
      </div>
      <div className="highlights">
        <p className="name">{name}</p>
        <p>{bio}</p>
      </div>
      <div className="button-div">
        <button
          type="submit"
          id={followeeId}
          onClick={buttonEvent}
          className={btnClass}
        >
          {button}
        </button>
      </div>
    </div>
  );
};

Follow.propTypes = {
  initials: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
  btnClass: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  followeeId: PropTypes.string.isRequired,
  buttonEvent: PropTypes.func.isRequired,
};

export default Follow;