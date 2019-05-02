import React from 'react';
import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';
import './popular-article-card.scss';

const ArticleCard = ({ title, author, date, likes }) => (
  <Item.Group>
    <Item>
      <Item.Content>
        <Item.Header as="a">{title}</Item.Header>
        <Item.Extra>
          <p className="author-name">{author}</p>
        </Item.Extra>
        <Item.Extra>
          <p>
            {date}
            &nbsp; &nbsp; &nbsp;
            {likes}
          </p>
        </Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
);

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
};

export default ArticleCard;
