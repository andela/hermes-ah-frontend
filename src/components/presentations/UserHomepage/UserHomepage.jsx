import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Item, Container, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import ArticleCard from '../ArticleCard/Article';
import PopularArticleCard from '../PopularArticleCard/PopularArticleCard';
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

  onLikeClick = articleId => {
    const { articles, likeArticle } = this.props;
    const { articleData } = articles;
    likeArticle(articleId, articleData);
  };

  render() {
    const { articles } = this.props;
    const { articleData } = articles;

    const popularArticlesLimit = articleData
      .sort((a, b) => parseInt(b.likes_count, 10) - parseInt(a.likes_count, 10))
      .slice(0, 3);

    const sectionArandomArticle = articleData.sort(() => Math.random() - 0.5);

    const sectionBrandomArticle = articleData.sort(() => Math.random() - 0.5);

    const sectionBdivA = sectionBrandomArticle.slice(0, 1);
    const sectionBdivB = sectionBrandomArticle.slice(1, 4);
    const sectionBdivC = sectionBrandomArticle.slice(4, 5);

    return (
      <div className="article-section-hmp cont">
        <Grid>
          <Grid.Row>
            <Grid.Column computer={12} mobile={16}>
              <Container className="display-article-card">
                {sectionArandomArticle.map(item => (
                  <ArticleCard
                    articleId={item.id}
                    key={item.id}
                    category={item.category}
                    title={item.title}
                    author={`${item.author.first_name} ${
                      item.author.last_name
                    }`}
                    date={item.createdAt}
                    read={`${item.reading_time} min read`}
                    paragraph={item.abstract}
                    image={item.image_url}
                  />
                ))}
              </Container>
            </Grid.Column>
            <Grid.Column computer={4} mobile={16}>
              <h2 className="custom-center">POPULAR POST</h2>
              <Container className="popular-articles-card">
                {popularArticlesLimit.map(elem => (
                  <PopularArticleCard
                    key={elem.id}
                    articleId={elem.id}
                    num={`0${popularArticlesLimit.indexOf(elem) + 1}`}
                    title={elem.title}
                    author={`${elem.author.first_name} ${
                      elem.author.last_name
                    }`}
                    date={elem.createdAt}
                    likes={elem.likes_count}
                    onClick={() => this.onLikeClick(elem.id)}
                  />
                ))}
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <hr className="line-brk" />
        <Item.Group className="section-2">
          <Container className="wrap-A-B">
            <div className="a-cont-wrap">
              {sectionBdivA.map(article => (
                <Link
                  to={`/article/${article.id}`}
                  className="sectA-lnk"
                  key={article.id}
                >
                  <Item className="a-sectn">
                    {article.image_url ? (
                      <Item.Image
                        className="a-image"
                        size="small"
                        src={article.image_url}
                      />
                    ) : null}

                    <Item.Content className="a-content">
                      <Item.Header className="art-title">
                        {article.title}
                      </Item.Header>
                      <Item.Description>
                        <p className="description">
                          {`${article.abstract.charAt(0).toUpperCase() +
                            article.abstract.slice(1).substring(0, 200)}...`}
                        </p>
                        <p className="author">
                          {`${article.author.first_name} ${
                            article.author.last_name
                          }`}
                        </p>
                        <p className="date">
                          {new Date(article.createdAt).toDateString()}
                        </p>
                      </Item.Description>
                    </Item.Content>
                  </Item>
                </Link>
              ))}
            </div>

            <div className="b-cont-wrap">
              {sectionBdivB.map(article => (
                <Link
                  to={`/article/${article.id}`}
                  className="sectA-lnk"
                  key={article.id}
                >
                  <Item className="b-sectn" key={article.id}>
                    <Item.Content className="b-content">
                      <Item.Header className="b-art-title">
                        {article.title}
                      </Item.Header>
                      <Item.Description>
                        <div className="description">
                          {article.image_url ? (
                            <Item.Image
                              className="b-image"
                              size="small"
                              src={article.image_url}
                            />
                          ) : null}
                          <p className="desc-txt">
                            {`${article.abstract.charAt(0).toUpperCase() +
                              article.abstract.slice(1).substring(0, 100)}...`}
                          </p>
                        </div>
                        <p className="author">
                          {`${article.author.first_name} ${
                            article.author.last_name
                          }`}
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
                </Link>
              ))}
            </div>
          </Container>
          <div className="c-cont-wrap">
            {sectionBdivC.map(article => (
              <Link
                to={`/article/${article.id}`}
                className="sectA-lnk"
                key={article.id}
              >
                <Item className="c-sectn" key={article.id}>
                  {article.image_url ? (
                    <Item.Image
                      className="c-image"
                      size="small"
                      src={article.image_url}
                    />
                  ) : null}

                  <Item.Content className="a-content">
                    <Item.Header className="art-title">
                      {article.title}
                    </Item.Header>
                    <Item.Description>
                      <p className="description">
                        {`${article.abstract.charAt(0).toUpperCase() +
                          article.abstract.slice(1).substring(0, 200)}...`}
                      </p>
                      <p className="author">
                        {`${article.author.first_name} ${
                          article.author.last_name
                        }`}
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
              </Link>
            ))}
          </div>
        </Item.Group>
      </div>
    );
  }
}

UserHomepage.propTypes = {
  articles: PropTypes.shape({
    articleData: PropTypes.array,
  }).isRequired,
  getAllArticles: PropTypes.func.isRequired,
  likeArticle: PropTypes.func.isRequired,
};

export default UserHomepage;
