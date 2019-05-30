import React from 'react';
import PropTypes from 'prop-types';
import Parser from 'html-react-parser';
import handleKeywords from '../../../utils/handleKeywords';
import './Article.scss';

const ReadingArticleCard = ({ article }) => {
  const keywords = handleKeywords(article.Keywords);
  return (
    <React.Fragment>
      <div className="article-container">
        <div className="article-title-container">
          <h2 className="article-title">{article.title}</h2>
        </div>
        <div className="article-author-detail-container">
          <div className="article-author-details">
            <div className="article-avatar">
              {article.author.image_url ? (
                <img src={article.author.image_url} alt="avatar" />
              ) : (
                <img
                  src="https://res.cloudinary.com/sojidan/image/upload/v1557149927/avatar.png"
                  alt="avatar"
                />
              )}
            </div>
            <div className="article-datail">
              <p className="aticle-detail-author-name">
                {article.author.first_name}
                &nbsp;
                {article.author.last_name}
              </p>
              <div className="article-datail-footer">
                <p>{`${new Date(article.createdAt).toDateString()}`}</p>
                &nbsp;
                <p>{`${article.reading_time} min read`}</p>
              </div>
            </div>
            <div className="article-btn-follow">
              <button type="button" className="btn-follow">
                Follow
              </button>
            </div>
          </div>
          <div className="article-rating-star">
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star" />
            <span className="fa fa-star" />
          </div>
        </div>
        {article.image_url ? (
          <div className="article-image-container">
            <img src={article.image_url} alt="header" />
          </div>
        ) : null}
        <div>
          <p>{article.abstract}</p>
        </div>
        <div className="article-body-container">{Parser(article.body)}</div>
        <div>
          <p>
            <b>Category: </b>
            {article.category}
          </p>
          <p>
            <b>Keywords: </b>
            {keywords.map(item => `${item}, `)}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

ReadingArticleCard.propTypes = {
  article: PropTypes.shape().isRequired,
};

export default ReadingArticleCard;
