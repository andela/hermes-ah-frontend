import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import HeroView from '../Hero-view/Heroview-presentations';
import ArticleCard from '../ArticleCard/Article';
import PopularArticleCard from '../PopularArticleCard/PopularArticleCard';
import dummyData from '../../../utils/dummyData';
import './homepage.scss';

const { article, popularArticle } = dummyData;

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <HeroView />
        <div className="article-section-hmp">
          <Grid>
            <Grid.Row>
              <Grid.Column computer={12} mobile={16}>
                <Container className="display-article-card">
                  {article.map(item => (
                    <ArticleCard
                      key={item.id}
                      category={item.category}
                      title={item.title}
                      author={item.author}
                      date={item.date}
                      read={item.read}
                      paragraph={item.paragraph}
                      image={item.image}
                    />
                  ))}
                </Container>
              </Grid.Column>
              <Grid.Column computer={4} mobile={16}>
                <h2 className="custom-center">POPULAR POST</h2>
                <Container className="popular-articles-card">
                  {popularArticle.map(elem => (
                    <PopularArticleCard
                      key={elem.id}
                      title={elem.title}
                      author={elem.author}
                      date={elem.date}
                      likes={elem.likes}
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

export default Homepage;
