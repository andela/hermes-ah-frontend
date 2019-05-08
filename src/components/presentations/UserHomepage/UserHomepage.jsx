import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Item, Container, Grid } from 'semantic-ui-react';
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

  render() {
    const { articles } = this.props;
    const { articleData } = articles;

    const popularArticles = articleData.sort(
      (a, b) => b.likes_count - a.likes_count
    );

    const sectionArandomArticle = articleData.sort(() => Math.random() - 0.5);

    const popularArticlesLimit = popularArticles.slice(0, 3);

    // const { loader } = isLoadingReducer;
    const sectionBrandomArticle = articleData.sort(() => Math.random() - 0.5);

    const sectionBdivA = sectionBrandomArticle.slice(0, 1);
    const sectionBdivB = sectionBrandomArticle.slice(1, 4);
    const sectionBdivC = sectionBrandomArticle.slice(4, 5);

    // const limit = randomArticle.sort(() => Math.random() - 10).slice(0, 1);

    return (
      <div className="article-section-hmp cont">
        <Grid>
          <Grid.Row>
            <Grid.Column computer={12} mobile={16}>
              <Container className="display-article-card">
                {sectionArandomArticle.map(item => (
                  <ArticleCard
                    key={item.id}
                    category={item.category}
                    title={item.title}
                    author={`${item.author.first_name} ${
                      item.author.last_name
                    }`}
                    date={item.createdAt}
                    read={`${item.reading_time} min read`}
                    paragraph={item.abstract.substring(0, 200)}
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
                    num={`0${popularArticlesLimit.indexOf(elem) + 1}`}
                    title={elem.title}
                    author={`${elem.author.first_name} ${
                      elem.author.last_name
                    }`}
                    date={elem.createdAt}
                    likes={elem.likes_count}
                  />
                ))}
                {/* <img
                  className="advert"
                  src="https://res.cloudinary.com/duzpmyphv/image/upload/v1556812752/medical2.jpg"
                  alt="advert"
                /> */}
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <hr className="line-brk" />
        <Item.Group className="section-2">
          <Container className="wrap-A-B">
            <div className="a-cont-wrap">
              {sectionBdivA.map(article => (
                <Item className="a-sectn" key={article.id}>
                  <Item.Image
                    className="a-image"
                    size="small"
                    src={article.image_url}
                  />

                  <Item.Content className="a-content">
                    <Item.Header className="art-title">
                      {article.title}
                    </Item.Header>
                    <Item.Description>
                      <p className="description">
                        {`${article.abstract.substring(0, 200)}...`}
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
              ))}
            </div>

            <div className="b-cont-wrap">
              {sectionBdivB.map(article => (
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
                          {`${article.abstract.substring(0, 100)}...`}
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
              ))}
            </div>
          </Container>
          <div className="c-cont-wrap">
            {sectionBdivC.map(article => (
              <Item className="c-sectn" key={article.id}>
                <Item.Image
                  className="c-image"
                  size="small"
                  src={article.image_url}
                />

                <Item.Content className="a-content">
                  <Item.Header className="art-title">
                    {article.title}
                  </Item.Header>
                  <Item.Description>
                    <p className="description">
                      {`${article.abstract.substring(0, 200)}...`}
                    </p>
                    <p className="author">
                      {`${article.author.first_name} ${
                        article.author.last_name
                      }`}
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
      </div>
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
