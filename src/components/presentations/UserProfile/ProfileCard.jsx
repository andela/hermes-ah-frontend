import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EditProfileModal from '../../shared/Modals/EditProfileModal';
import removeEmptyString from '../../../utils/removeEmptyString';
import './userprofile.scss';

class ProfileCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      profileDetails: {
        title: '',
        research_field: '',
        bio: '',
      },
    };
  }

  updateUserProfile = async (e, data) => {
    const { updateProfile } = this.props;
    e.preventDefault();
    const strippedData = removeEmptyString(data);
    await updateProfile(strippedData);
    this.closeModal();
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  openModal = () => {
    this.setState({ modalOpen: true });
  };

  changeProfile = ({ target }) => {
    const { profileDetails } = this.state;
    profileDetails[target.id] = target.value;
    this.setState({ profileDetails });
  };

  render() {
    const { profile } = this.props;
    const { modalOpen, profileDetails } = this.state;
    return (
      <div className="profile-card">
        {profile ? (
          <div>
            <EditProfileModal
              modal={{
                modalOpen,
                closeModal: this.closeModal,
                openModal: this.openModal,
                title: 'Edit Profile',
                updateProfile: this.updateUserProfile,
              }}
            >
              <form
                className="edit-profile-form"
                onSubmit={e => this.updateUserProfile(e, profileDetails)}
              >
                <label htmlFor="title">
                  <p>Title:</p>
                  <input
                    type="text"
                    id="title"
                    defaultValue={profile.title}
                    onChange={e => this.changeProfile(e)}
                  />
                </label>
                <label htmlFor="research_field">
                  <p>Research Field:</p>
                  <input
                    type="text"
                    id="research_field"
                    defaultValue={profile.research_field}
                    onChange={e => this.changeProfile(e)}
                  />
                </label>
                <label htmlFor="bio">
                  <p>Bio</p>
                  <textarea
                    type="text"
                    id="bio"
                    defaultValue={profile.bio}
                    onChange={e => this.changeProfile(e)}
                  />
                </label>
                <div>
                  <button type="submit" className="edt-btn">
                    Save
                  </button>
                  <button
                    type="button"
                    className="cancel-btn"
                    onClick={() => this.closeModal()}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </EditProfileModal>
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
