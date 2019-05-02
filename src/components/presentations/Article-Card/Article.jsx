import React from 'react';
import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';
import './article-card.scss';

const ArticleCard = ({ title, author, date, read, paragraph, image }) => (
  <Item.Group>
    <Item>
      <Item.Content>
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
};

export default ArticleCard;
