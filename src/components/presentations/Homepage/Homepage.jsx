import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Grid } from 'semantic-ui-react';
import HeroView from '../HeroView/HeroviewPresentations';
import ArticleCard from '../ArticleCard/Article';
import PopularArticleCard from '../PopularArticleCard/PopularArticleCard';
import './homepage.scss';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    const { getAllArticles: articles } = this.props;
    articles();
  };

  render() {
    const { articles } = this.props;
    const { articleData } = articles;
    const sortedArticle = articleData.sort(
      (a, b) => b.likes_count - a.likes_count
    );
    const randomArticle = articleData.sort(() => Math.random() - 0.5);

    const limit = sortedArticle.slice(0, 3);
    return (
      <React.Fragment>
        <HeroView />
        <div className="article-section-hmp">
          <Grid>
            <Grid.Row>
              <Grid.Column computer={12} mobile={16}>
                <Container className="display-article-card">
                  {randomArticle.map(item => (
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
                  {limit.map(elem => (
                    <PopularArticleCard
                      key={elem.id}
                      num={`0${limit.indexOf(elem) + 1}`}
                      title={elem.title}
                      author={`${elem.author.first_name} ${
                        elem.author.last_name
                      }`}
                      date={elem.createdAt}
                      likes={elem.likes_count}
                    />
                  ))}
                  <img
                    className="advert"
                    src="https://res.cloudinary.com/duzpmyphv/image/upload/v1556812752/medical2.jpg"
                    alt="advert"
                  />
                </Container>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

Homepage.propTypes = {
  articles: PropTypes.shape({
    isLoading: PropTypes.bool,
    articleData: PropTypes.arrayOf(PropTypes.shape),
  }).isRequired,
  getAllArticles: PropTypes.func.isRequired,
};

export default Homepage;
