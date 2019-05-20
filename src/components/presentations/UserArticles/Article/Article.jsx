import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import '../author-articles.scss';

const Article = ({ title, date, isDraft }) => {
  let draftStatus;
  if (!isDraft) {
    draftStatus = 'unpublish';
  } else {
    draftStatus = 'publish';
  }
  return (
    <div className="profile-article-list">
      <div className="article-list">
        <h3>{title}</h3>
        <p>{date}</p>
      </div>
      <div className="update-buttons">
        <Button className="success">Edit</Button>
        <Button className={draftStatus}>{draftStatus}</Button>
        <Button className="failure">Delete</Button>
      </div>
    </div>
  );
};
Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  isDraft: PropTypes.bool.isRequired,
};

export default Article;
