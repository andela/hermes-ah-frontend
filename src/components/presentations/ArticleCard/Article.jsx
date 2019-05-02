import React from 'react';
import PropTypes from 'prop-types';
import { Item, Header } from 'semantic-ui-react';
import './article-card.scss';

const ArticleCard = ({
  category,
  title,
  author,
  date,
  read,
  paragraph,
  image,
}) => (
  <Item.Group className="article-card-item">
    <Header as="h3" className="category">
      {category}
    </Header>
    <Item>
      <Item.Content>
        <br />
        <Item.Header as="a">{title}</Item.Header>
        <Item.Description>{paragraph}</Item.Description>
        <Item.Extra>
          <p className="author-name">{author}</p>
        </Item.Extra>
        <Item.Extra>
          <p>
            {date}
            &nbsp; &nbsp; &nbsp;
            {read}
          </p>
        </Item.Extra>
      </Item.Content>
      <Item.Image size="small" src={image} />
    </Item>
  </Item.Group>
);

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  read: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default ArticleCard;
