import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './modal.scss';

class EditProfileModal extends Component {
  constructor(props) {
    super(props);
    const { modal } = this.props;
    this.state = {
      profileDetails: {
        title: modal.profile.title,
        research_field: modal.profile.research_field,
        bio: modal.profile.bio,
      },
    };
  }

  changeProfile = ({ target }) => {
    const { profileDetails } = this.state;
    profileDetails[target.id] = target.value;
    this.setState({ profileDetails });
  };

  render() {
    const { modal } = this.props;
    const { profileDetails } = this.state;
    return (
      <div className={modal.modalOpen ? 'modal' : 'none'}>
        <div className="modal-content">
          <div className="modal-header">
            <h2>Edit Profile</h2>
            <span
              className="close"
              onClick={() => modal.closeModal()}
              onKeyDown={() => modal.closeModal()}
              role="button"
              tabIndex={0}
            >
              &times;
            </span>
          </div>
          <div className="modal-body">
            <form
              className="edit-profile-form"
              onSubmit={e => modal.updateProfile(e, profileDetails)}
            >
              <label htmlFor="title">
                <p>Title:</p>
                <input
                  type="text"
                  id="title"
                  value={profileDetails.title}
                  onChange={this.changeProfile}
                />
              </label>
              <label htmlFor="research_field">
                <p>Research Field:</p>
                <input
                  type="text"
                  id="research_field"
                  value={profileDetails.research_field}
                  onChange={this.changeProfile}
                />
              </label>
              <label htmlFor="bio">
                <p>Bio</p>
                <textarea
                  type="text"
                  id="bio"
                  value={profileDetails.bio}
                  onChange={this.changeProfile}
                />
              </label>
              <div>
                <button type="submit" className="edt-btn">
                  Save
                </button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => modal.closeModal()}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
          <div className="modal-footer" />
        </div>
      </div>
    );
  }
}

EditProfileModal.propTypes = {
  modal: PropTypes.shape().isRequired,
};

export default EditProfileModal;
