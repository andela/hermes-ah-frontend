import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class ModalExampleSize extends Component {
  state = {};

  //   show = size => () => this.setState({ size, open: true });

  //   close = () => this.setState({ open: false });

  render() {
    //   const { open } = this.state
    const { open, size, close, buttonEvent, articleId } = this.props;

    return (
      <div>
        <Modal size={size} open={open} onClose={close}>
          <Modal.Header>Delete Your Article</Modal.Header>
          <Modal.Content>
            <p>Are you sure you want to delete this article?</p>
          </Modal.Content>
          <Modal.Actions>
            <Button positive onClick={close}>
              No
            </Button>
            <Button
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
  }
}

ModalExampleSize.propTypes = {
  open: PropTypes.bool.isRequired,
  size: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
  buttonEvent: PropTypes.func.isRequired,
  articleId: PropTypes.string.isRequired,
};
export default ModalExampleSize;
