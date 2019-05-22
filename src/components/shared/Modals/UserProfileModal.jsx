import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './modal.scss';

class ProfileModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { modal } = this.props;
    const profile = [modal.modalProfile];

    const userDet =
      Object.keys(modal.modalProfile).length &&
      profile.map(user => (
        <div className="modal-content" key={user.profile.id}>
          <div className="modal-header">
            <h2>
              {user.profile.first_name}
              &nbsp;
              {user.profile.last_name}
            </h2>
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
            <div className="profile-modal-grid">
              <div className="image-container">
                <img alt="user" src={user.profile.image_url} />
              </div>
              <div>
                <p>{user.profile.title}</p>
                <p>{user.profile.research_field}</p>
                <p>{user.profile.email}</p>
                <p>{user.profile.phone_number}</p>
                <p>{user.profile.bio}</p>
              </div>
            </div>
          </div>
          <div className="modal-footer" />
        </div>
      ));
    return (
      <div className={modal.modalOpen ? 'modal' : 'none'}>
        {Object.keys(modal.modalProfile).length ? userDet : null}
      </div>
    );
  }
}

ProfileModal.propTypes = {
  modal: PropTypes.shape().isRequired,
};

export default ProfileModal;
