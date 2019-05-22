import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EditProfileModal from '../../shared/Modals/EditProfileModal';
import './userprofile.scss';

class ProfileCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
  }

  updateUserProfile = async (e, data) => {
    const { updateProfile } = this.props;
    e.preventDefault();
    await updateProfile(data);
    this.closeModal();
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  openModal = () => {
    this.setState({ modalOpen: true });
  };

  render() {
    const { profile } = this.props;
    const { modalOpen } = this.state;
    return (
      <div className="profile-card">
        {profile ? (
          <div>
            <EditProfileModal
              modal={{
                modalOpen,
                profile,
                closeModal: this.closeModal,
                openModal: this.openModal,
                updateProfile: this.updateUserProfile,
              }}
            />
            <div className="edit-icon">
              <button type="button" onClick={this.openModal}>
                <i className="far fa-edit" />
              </button>
            </div>
            <p className="profile-card-item">
              <b>Title:</b>
              <span>{profile.title}</span>
            </p>
            <p className="profile-card-item">
              <b>Research Field:</b>
              <span>{profile.research_field}</span>
            </p>
            <p className="profile-card-item">
              <b>Email:</b>
              <span>{profile.email}</span>
            </p>
            <p className="profile-card-item">
              <b>Phone Number:</b>
              <span>{profile.phone_number}</span>
            </p>
            <p className="profile-card-item">
              <b>About Me:</b>
              <span>{profile.bio}</span>
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
