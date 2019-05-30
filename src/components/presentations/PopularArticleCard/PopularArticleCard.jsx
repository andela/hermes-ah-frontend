import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Item } from 'semantic-ui-react';
import './popular-article-card.scss';

const PopularArticleCard = ({ title, author, date, num, articleId }) => (
  <Item.Group>
    <Item>
      <Item.Header className="header-num" as="h1">
        {num}
      </Item.Header>
      <Item.Content>
        <Link to={`/article/${articleId}`} className="link">
          <Item.Header as="h3">{title}</Item.Header>
        </Link>
        <Item.Extra>
          <p className="author-name">{author}</p>
        </Item.Extra>
        <Item.Extra>
          <div className="likes-date-det">
            {new Date(date).toDateString()}
            &nbsp;
            <React.Fragment>
              <i className="fas fa-star" />
            </React.Fragment>
          </div>
        </Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
);

PopularArticleCard.defaultProps = {
  date: '10/05/2019, 08:49:38',
  articleId: '',
};

PopularArticleCard.propTypes = {
  num: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string,
  articleId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default PopularArticleCard;
