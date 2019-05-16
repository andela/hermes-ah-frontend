import React from 'react';
import PropTypes from 'prop-types';
import { Item, Button } from 'semantic-ui-react';
import './popular-article-card.scss';

const PopularArticleCard = ({ title, author, date, likes, num, onClick }) => (
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
            <Button onClick={onClick}>
              <i className="far fa-thumbs-up" />
            </Button>
            &nbsp;
            {likes}
          </p>
        </Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
);

PopularArticleCard.defaultProps = {
  date: '10/05/2019, 08:49:38',
  likes: 0,
};

PopularArticleCard.propTypes = {
  num: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string,
  likes: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};

export default PopularArticleCard;
