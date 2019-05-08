import React from 'react';
import PropTypes from 'prop-types';
import './userprofile.scss';

const Profilecard = ({ profile }) => {
  return (
    <div className="profile-card">
      {profile ? (
        <div>
          <p className="profile-card-item">
            <b>Title:</b>
            <span contentEditable suppressContentEditableWarning>
              {profile.title}
            </span>
          </p>
          <p className="profile-card-item">
            <b>Research Field:</b>
            <span contentEditable suppressContentEditableWarning>
              {profile.research_field}
            </span>
          </p>
          <p className="profile-card-item">
            <b>Email:</b>
            <span contentEditable suppressContentEditableWarning>
              {profile.email}
            </span>
          </p>
          <p className="profile-card-item">
            <b>Phone Number:</b>
            <span contentEditable suppressContentEditableWarning>
              {profile.phone_number}
            </span>
          </p>
          <p className="profile-card-item">
            <b>About Me:</b>
            <span contentEditable suppressContentEditableWarning>
              {profile.bio}
            </span>
          </p>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

Profilecard.defaultProps = {
  profile: undefined,
};

Profilecard.propTypes = {
  profile: PropTypes.shape(),
};

export default Profilecard;
