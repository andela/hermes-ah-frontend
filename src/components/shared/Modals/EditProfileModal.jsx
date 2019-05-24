import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './modal.scss';

class EditProfileModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { modal, children } = this.props;
    return (
      <div className={modal.modalOpen ? 'modal' : 'none'}>
        <div className="modal-content">
          <div className="modal-header">
            <h2>{modal.title}</h2>
            <span
              className="close"
              onClick={modal.closeModal}
              onKeyDown={modal.closeModal}
              role="button"
              tabIndex={0}
            >
              &times;
            </span>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer" />
        </div>
      </div>
    );
  }
}

EditProfileModal.propTypes = {
  modal: PropTypes.shape().isRequired,
  children: PropTypes.shape().isRequired,
};

export default EditProfileModal;
