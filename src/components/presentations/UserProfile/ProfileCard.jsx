import React from 'react';
import PropTypes from 'prop-types';
import './userprofile.scss';

const ProfileCard = ({ profile, updateProfile }) => {
  return (
    <div className="profile-card">
      {profile ? (
        <div>
          <p className="profile-card-item">
            <b>Title:</b>
            <span
              contentEditable
              suppressContentEditableWarning
              onBlur={e => updateProfile({ title: e.target.textContent })}
            >
              {profile.title}
            </span>
          </p>
          <p className="profile-card-item">
            <b>Research Field:</b>
            <span
              contentEditable
              suppressContentEditableWarning
              onBlur={e =>
                updateProfile({ research_field: e.target.textContent })
              }
            >
              {profile.research_field}
            </span>
          </p>
          <p className="profile-card-item">
            <b>Email:</b>
            <span>{profile.email}</span>
          </p>
          <p className="profile-card-item">
            <b>Phone Number:</b>
            <span
              contentEditable
              suppressContentEditableWarning
              onBlur={e => {
                updateProfile({ phone_number: e.target.textContent });
              }}
            >
              {profile.phone_number}
            </span>
          </p>
          <p className="profile-card-item">
            <b>About Me:</b>
            <span
              contentEditable
              suppressContentEditableWarning
              onBlur={e => updateProfile({ bio: e.target.textContent })}
            >
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

ProfileCard.defaultProps = {
  profile: undefined,
};

ProfileCard.propTypes = {
  profile: PropTypes.shape(),
  updateProfile: PropTypes.func.isRequired,
};

export default ProfileCard;
