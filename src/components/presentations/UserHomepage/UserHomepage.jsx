import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';
import './user-homepage.scss';

class UserHomepage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    const { getAllArticles: fetchArticles } = this.props;
    fetchArticles();
  };

  render() {
    const { articles } = this.props;
    const { articleData } = articles;
    const randomArticle = articleData.sort(() => Math.random() - 0.5);

    const divA = randomArticle.slice(0, 1);
    const divB = randomArticle.slice(1, 4);
    const divC = randomArticle.slice(4, 5);

    // const limit = randomArticle.sort(() => Math.random() - 10).slice(0, 1);

    return (
      <Item.Group className="section-2">
        <div className="a-cont-wrap">
          {divA.map(article => (
            <Item className="a-sectn" key={article.id}>
              <Item.Image
                className="a-image"
                size="small"
                src={article.image_url}
              />

              <Item.Content className="a-content">
                <Item.Header className="art-title">{article.title}</Item.Header>
                <Item.Description>
                  <p className="description">
                    {`${article.abstract.substring(0, 200)}...`}
                  </p>
                  <p className="author">
                    {`${article.author.first_name} ${article.author.last_name}`}
                  </p>
                  <p className="date">
                    {new Date(article.createdAt).toDateString()}
                  </p>
                </Item.Description>
              </Item.Content>
            </Item>
          ))}
        </div>

        <div className="b-cont-wrap">
          {divB.map(article => (
            <Item className="b-sectn" key={article.id}>
              <Item.Content className="b-content">
                <Item.Header className="b-art-title">
                  {article.title}
                </Item.Header>
                <Item.Description>
                  <div className="description">
                    <Item.Image
                      className="b-image"
                      size="small"
                      src={article.image_url}
                    />
                    <p className="desc-txt">
                      {`${article.abstract.substring(0, 200)}...`}
                    </p>
                  </div>
                  <p className="author">
                    {`${article.author.first_name} ${article.author.last_name}`}
                  </p>
                  <div className="date-start">
                    <p className="date">
                      {new Date(article.createdAt).toDateString()}
                    </p>
                    <p className="stats">
                      {`${article.reading_time} min read`}
                    </p>
                  </div>
                </Item.Description>
              </Item.Content>
            </Item>
          ))}
        </div>

        <div className="a-cont-wrap">
          {divC.map(article => (
            <Item className="a-sectn" key={article.id}>
              <Item.Image
                className="a-image"
                size="small"
                src={article.image_url}
              />

              <Item.Content className="a-content">
                <Item.Header className="art-title">{article.title}</Item.Header>
                <Item.Description>
                  <p className="description">
                    {`${article.abstract.substring(0, 200)}...`}
                  </p>
                  <p className="author">
                    {`${article.author.first_name} ${article.author.last_name}`}
                  </p>
                  <div className="date-start">
                    <p className="date">March 13 2019</p>
                    <p className="stats">7 min read</p>
                  </div>
                </Item.Description>
              </Item.Content>
            </Item>
          ))}
        </div>
      </Item.Group>
    );
  }
}

UserHomepage.propTypes = {
  articles: PropTypes.shape({
    // isLoading: PropTypes.bool,
    // articleData: PropTypes.arrayOf(PropTypes.shape),
  }).isRequired,
  getAllArticles: PropTypes.func.isRequired,
};

export default UserHomepage;
