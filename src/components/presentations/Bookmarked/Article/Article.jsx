import React from 'react';
import { Item } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './article.scss';

const Article = ({ title, abstract, image, readTime }) => (
  <div className="bookmark-articles-list">
    <Item.Group>
      <Item>
        <Item.Content>
          <Item.Header as="a">{title}</Item.Header>
          <Item.Description>
            <p>{abstract}</p>
            <p className="meta">
              {readTime}
              &nbsp; min read
            </p>
          </Item.Description>
        </Item.Content>

        <Item.Image size="small" src={image} />
      </Item>
    </Item.Group>
  </div>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  abstract: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  readTime: PropTypes.number.isRequired,
};

export default Article;
