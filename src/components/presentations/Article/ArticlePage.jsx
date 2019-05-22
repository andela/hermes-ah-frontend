import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import NavBar from '../../shared/NavBar/NavBar';
import Comments from './Comments';
import ReadingCard from './reading-article-card';
import './Article.scss';
import Rate from './Rate';

class ArticlePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    const { getSingleArticle, match } = this.props;
    const { articleId } = match.params;
    getSingleArticle(articleId);
  };

  render() {
    const { singleArticle, match, rateArticle } = this.props;
    const { articleId } = match.params;
    const { article } = singleArticle;

    return (
      <React.Fragment>
        <NavBar />
        <div className="article-page">
          <Grid>
            <Grid.Row columns={3}>
              <Grid.Column computer={2} mobile={16}>
                <div className="section">
                  <div className="social-sharing">
                    <div className="facebook-share">
                      <i className="fab fa-facebook-f" />
                    </div>
                    <div className="twitter-share">
                      <i className="fab fa-twitter" />
                    </div>
                    <div className="bookmark">
                      <i className="far fa-bookmark" />
                    </div>
                    <div className="like">
                      <i className="far fa-thumbs-up" />
                      <p>{article.likes_count}</p>
                    </div>
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column computer={10} mobile={16}>
                <Grid.Row>
                  <Grid.Column>
                    <div className="section">
                      <ReadingCard />
                      <Rate
                        articleId={articleId}
                        rateArticle={rateArticle}
                        likes={article.likes_count}
                      />
                      {Object.keys(article).length ? (
                        <ReadingCard article={article} />
                      ) : (
                        <p>Loading...</p>
                      )}
                    </div>
                  </Grid.Column>
                  <Grid.Column>
                    <Comments comments={article.Comments} />
                  </Grid.Column>
                </Grid.Row>
              </Grid.Column>
              <Grid.Column computer={4} mobile={16}>
                <div className="section">Related article section</div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

ArticlePage.propTypes = {
  getSingleArticle: PropTypes.func.isRequired,
  match: PropTypes.shape(PropTypes.objectOf).isRequired,
  singleArticle: PropTypes.shape({}).isRequired,
  rateArticle: PropTypes.func.isRequired,
};

export default ArticlePage;
