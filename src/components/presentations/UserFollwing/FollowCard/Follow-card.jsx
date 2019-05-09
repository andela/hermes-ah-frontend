import React from 'react';
import PropTypes from 'prop-types';
import './follow-card.scss';

const Follow = ({ initials, imageUrl, name, bio, button, btnClass }) => {
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
        <button type="submit" className={btnClass}>
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
};

export default Follow;
