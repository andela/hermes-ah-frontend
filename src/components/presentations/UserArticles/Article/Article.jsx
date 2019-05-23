import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Modal from '../modal';
import '../author-articles.scss';

const Article = ({
  title,
  date,
  isDraft,
  articleId,
  buttonEvent,
  open,
  size,
  showConfirmationModal,
  closeConfirmationModal,
}) => {
  let draftStatus;
  if (!isDraft) {
    draftStatus = 'unpublish';
  } else {
    draftStatus = 'publish';
  }
  return (
    <React.Fragment>
      {open && (
        <Modal
          size={size}
          open={open}
          closeConfirmationModal={closeConfirmationModal}
          buttonEvent={buttonEvent}
          articleId={articleId}
        />
      )}
      <div className="profile-article-list">
        <div className="article-list">
          <h3>{title}</h3>
          <p>{date}</p>
        </div>
        <div className="update-buttons">
          <Button className="success">Edit</Button>
          <Button className={draftStatus}>{draftStatus}</Button>
          <Button
            type="submit"
            className="failure"
            onClick={showConfirmationModal}
          >
            Delete
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  isDraft: PropTypes.bool.isRequired,
  buttonEvent: PropTypes.func.isRequired,
  articleId: PropTypes.string.isRequired,
  showConfirmationModal: PropTypes.func.isRequired,
  closeConfirmationModal: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  size: PropTypes.string.isRequired,
};

export default Article;
