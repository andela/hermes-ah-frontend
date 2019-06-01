import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const ConfirmationModal = ({
  open,
  size,
  buttonEvent,
  closeConfirmationModal,
  id,
  modalHeader,
  modalQuestion,
}) => {
  return (
    <div>
      <Modal size={size} open={open} onClose={closeConfirmationModal}>
        <Modal.Header>{modalHeader}</Modal.Header>
        <Modal.Content>
          <p>{modalQuestion}</p>
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

ConfirmationModal.propTypes = {
  open: PropTypes.bool.isRequired,
  size: PropTypes.string.isRequired,
  closeConfirmationModal: PropTypes.func.isRequired,
  buttonEvent: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  modalHeader: PropTypes.string.isRequired,
  modalQuestion: PropTypes.string.isRequired,
};

export default ConfirmationModal;
