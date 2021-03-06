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
  id,
  buttonEvent,
  openModal,
}) => {
  return (
    <div className="main-card">
      <div
        className="details"
        onClick={openModal}
        onKeyDown={openModal}
        role="button"
        tabIndex={0}
      >
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
      </div>
      <div className="button-div">
        <button
          type="submit"
          id={id}
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
  id: PropTypes.string.isRequired,
  buttonEvent: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default Follow;
