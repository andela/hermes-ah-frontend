import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
  articleId,
}) => (
  <Item.Group className="article-card-item">
    <Header as="h3" className="category">
      {category}
    </Header>
    <Item>
      <Item.Content>
        <br />
        <Link to={`/article/${articleId}`} className="link">
          <h3 className="art-header">{title}</h3>
          <Item.Description>
            {`${paragraph.charAt(0).toUpperCase() +
              paragraph.slice(1).substring(0, 200)}...`}
          </Item.Description>
        </Link>
        <Item.Extra>
          <p className="author-name">{author}</p>
        </Item.Extra>
        <Item.Extra>
          <p>
            {new Date(date).toDateString()}
            &nbsp; &nbsp; &nbsp;
            {read}
          </p>
        </Item.Extra>
      </Item.Content>
      <Item.Image
        size="small"
        src={
          image ||
          'https://res.cloudinary.com/dnch08bzc/image/upload/v1557150721/science-1182713_1280.jpg'
        }
      />
    </Item>
  </Item.Group>
);

ArticleCard.defaultProps = {
  image:
    'https://res.cloudinary.com/dnch08bzc/image/upload/v1557150721/science-1182713_1280.jpg',
};

ArticleCard.defaultProps = {
  date: '10/05/2019, 08:49:38',
  articleId: '',
};

ArticleCard.propTypes = {
  articleId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string,
  read: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  image: PropTypes.string,
  category: PropTypes.string.isRequired,
};

export default ArticleCard;
