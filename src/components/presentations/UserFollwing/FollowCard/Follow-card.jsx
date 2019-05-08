import React from 'react';
import PropTypes from 'prop-types';
import './follow-card.scss';

const Follow = ({ initials, name, bio, button }) => {
  return (
    <div className="main-card">
      <div className="img-section">
        <p className="initials">{initials}</p>
      </div>
      <div className="highlights">
        <p className="name">{name}</p>
        <p>{bio}</p>
      </div>
      <div className="button-div">
        <button type="submit" className="following">
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
};

export default Follow;
