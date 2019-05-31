import React from 'react';
import PropTypes from 'prop-types';
import './modal.scss';

const Modal = ({ modalOpen, closeModal, title, children }) => {
  return (
    <div className={modalOpen ? 'custom-modal' : 'none'}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>{title}</h2>
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
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func.isRequired,
  modalOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default Modal;
