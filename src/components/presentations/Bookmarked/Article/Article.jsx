import React from 'react';
import PropTypes from 'prop-types';
import { Popup } from 'semantic-ui-react';
import Bookmark from '../../../containers/bookmark.container';
import './article.scss';

const Article = ({ articleId, title, author, abstract, image, readTime }) => (
  <div className="bookmark-articles-list">
    <div className="article-details">
      <h3>{title}</h3>
      <p>{`${abstract.substring(0, 200)}...`}</p>

      <div className="author-details">
        <p>{author}</p>
        <p className="meta">{`${readTime} min read`}</p>
        <div className="unbookmark">
          <Popup
            content="Remove Bookmark"
            trigger={
              // eslint-disable-next-line react/jsx-wrap-multilines
              <Bookmark articleId={articleId} />
            }
          />
        </div>
      </div>
    </div>
    <div className="article-img">
      <img src={image} alt="article logo" />
    </div>
  </div>
);

Article.propTypes = {
  articleId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  abstract: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  readTime: PropTypes.number.isRequired,
};

export default Article;
