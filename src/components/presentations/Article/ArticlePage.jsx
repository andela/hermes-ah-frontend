import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import NavBar from '../../shared/NavBar/NavBar';
import Comments from './Comments';
import ReadingCard from './reading-article-card';
import './Article.scss';

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
    const { singleArticle } = this.props;
    const { article } = singleArticle;
    return (
      <React.Fragment>
        <NavBar />
        <div className="article-page">
          <Grid>
            <Grid.Row columns={3}>
              <Grid.Column computer={2} mobile={16}>
                <div className="section">Social Section</div>
              </Grid.Column>
              <Grid.Column computer={10} mobile={16}>
                <Grid.Row>
                  <Grid.Column>
                    <div className="section">
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
};

export default ArticlePage;
