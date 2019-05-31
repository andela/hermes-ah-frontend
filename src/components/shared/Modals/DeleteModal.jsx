import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const DeleteModal = ({ open, buttonEvent, closeConfirmationModal, id }) => {
  return (
    <div>
      <Modal size="tiny" open={open} onClose={closeConfirmationModal}>
        <Modal.Header>Delete Your Comment</Modal.Header>
        <Modal.Content>
          <p>Are you sure you want to delete this comment?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button positive onClick={closeConfirmationModal}>
            No
          </Button>
          <Button
            type="submit"
            negative
            icon="checkmark"
            labelPosition="right"
            content="Yes"
            id={id}
            onClick={buttonEvent}
          />
        </Modal.Actions>
      </Modal>
    </div>
  );
};

DeleteModal.propTypes = {
  open: PropTypes.bool.isRequired,
  closeConfirmationModal: PropTypes.func.isRequired,
  buttonEvent: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default DeleteModal;
