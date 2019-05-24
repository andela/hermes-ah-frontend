import React from 'react';
import PropTypes from 'prop-types';
import './modal.scss';

const Modal = ({ modalOpen, closeModal, children }) => {
  return (
    <div className={modalOpen ? 'modal' : 'none'}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>Edit Profile</h2>
          <span
            className="close"
            onClick={closeModal}
            onKeyDown={closeModal}
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
};

Modal.propTypes = {
  children: PropTypes.shape().isRequired,
  closeModal: PropTypes.func.isRequired,
  modalOpen: PropTypes.func.isRequired,
};

export default Modal;
