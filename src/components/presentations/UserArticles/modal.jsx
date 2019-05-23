import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const ConfirmationModal = ({
  open,
  size,
  buttonEvent,
  closeConfirmationModal,
  articleId,
}) => {
  return (
    <div>
      <Modal size={size} open={open} onClose={closeConfirmationModal}>
        <Modal.Header>Delete Your Article</Modal.Header>
        <Modal.Content>
          <p>Are you sure you want to delete this article?</p>
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
            id={articleId}
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
  articleId: PropTypes.string.isRequired,
};

export default ConfirmationModal;
