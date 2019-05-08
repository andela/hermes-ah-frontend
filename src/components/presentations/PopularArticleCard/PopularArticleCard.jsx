import React from 'react';
import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';
import './popular-article-card.scss';

const ArticleCard = ({ title, author, date, likes, num }) => (
  <Item.Group>
    <Item>
      <Item.Header className="header-num" as="h1">
        {num}
      </Item.Header>
      <Item.Content>
        <Item.Header as="a">{title}</Item.Header>
        <Item.Extra>
          <p className="author-name">{author}</p>
        </Item.Extra>
        <Item.Extra>
          <p>
            {new Date(date).toDateString()}
            &nbsp; &nbsp; &nbsp;
            <i className="far fa-thumbs-up" />
            &nbsp;
            {likes}
          </p>
        </Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
);

ArticleCard.propTypes = {
  num: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
};

export default ArticleCard;
