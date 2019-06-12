import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../author-articles.scss';

const Article = ({
  title,
  date,
  isDraft,
  articleId,
  showConfirmationModal,
}) => {
  let draftStatus;
  if (!isDraft) {
    draftStatus = 'unpublish';
  } else {
    draftStatus = 'publish';
  }
  return (
    <React.Fragment>
      <div className="profile-article-list">
        <div className="article-list">
          <h3>{title}</h3>
          <p>{date}</p>
        </div>
        <div className="update-buttons">
          <Link to={`/edit-article/${articleId}`}>
            <Button className="success" id={articleId} type="submit">
              Edit
            </Button>
          </Link>
          <Button className={draftStatus}>{draftStatus}</Button>
          <Button
            type="submit"
            className="failure"
            onClick={() => showConfirmationModal('tiny', articleId)}
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
  articleId: PropTypes.string.isRequired,
  showConfirmationModal: PropTypes.func.isRequired,
};

export default Article;
