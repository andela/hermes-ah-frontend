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
              className="editable"
              contentEditable
              suppressContentEditableWarning
              onBlur={e => updateProfile({ title: e.target.textContent })}
            >
              {profile.title}
            </span>
            <i className="fas fa-ellipsis-v" title="Update your title" />
          </p>
          <p className="profile-card-item">
            <b>Research Field:</b>
            <span
              className="editable"
              contentEditable
              suppressContentEditableWarning
              onBlur={e =>
                updateProfile({ research_field: e.target.textContent })
              }
            >
              {profile.research_field}
            </span>
            <i
              className="fas fa-ellipsis-v"
              title="Update your research field"
            />
          </p>
          <p className="profile-card-item">
            <b>Email:</b>
            <span>{profile.email}</span>
          </p>
          <p className="profile-card-item">
            <b>Phone Number:</b>
            <span
              className="editable"
              contentEditable
              suppressContentEditableWarning
              onBlur={e => {
                updateProfile({ phone_number: e.target.textContent });
              }}
            >
              {profile.phone_number}
            </span>
            <i className="fas fa-ellipsis-v" title="Update your phone number" />
          </p>
          <p className="profile-card-item">
            <b>About Me:</b>
            <span
              className="editable"
              contentEditable
              suppressContentEditableWarning
              onBlur={e => updateProfile({ bio: e.target.textContent })}
            >
              {profile.bio}
            </span>
            <i className="fas fa-ellipsis-v" title="Update your bio" />
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
