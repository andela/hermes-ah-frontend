import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './userprofile.scss';

class ProfileCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
    };
  }

  storeDetail = ({ target }) => {
    const { profile } = this.state;
    profile[target.id] = target.textContent;
    this.setState({ profile });
  };

  updateUserProfile = ({ target }) => {
    const { profile } = this.state;
    const { updateProfile } = this.props;
    if (profile[target.id] !== target.textContent) {
      const key = target.id;
      const value = target.textContent;
      updateProfile({ [key]: value });
    }
  };

  render() {
    const { profile } = this.props;
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
                id="title"
                onFocus={e => this.storeDetail(e)}
                onBlur={e => this.updateUserProfile(e)}
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
                id="research_field"
                onFocus={e => this.storeDetail(e)}
                onBlur={e => this.updateUserProfile(e)}
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
                id="phone_number"
                onFocus={e => this.storeDetail(e)}
                onBlur={e => this.updateUserProfile(e)}
              >
                {profile.phone_number}
              </span>
              <i
                className="fas fa-ellipsis-v"
                title="Update your phone number"
              />
            </p>
            <p className="profile-card-item">
              <b>About Me:</b>
              <span
                className="editable"
                contentEditable
                suppressContentEditableWarning
                id="bio"
                onFocus={e => this.storeDetail(e)}
                onBlur={e => this.updateUserProfile(e)}
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
  }
}

ProfileCard.defaultProps = {
  profile: undefined,
};

ProfileCard.propTypes = {
  profile: PropTypes.shape(),
  updateProfile: PropTypes.func.isRequired,
};

export default ProfileCard;
