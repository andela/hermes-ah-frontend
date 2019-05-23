import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import NavBar from '../../shared/NavBar/NavBar';
import ViewComment from './ViewComment';
import ReadingCard from './ReadingArticleCard';
import InputComment from './InputComment';
import Loader from '../../shared/Loader/Loader';
import './Article.scss';
import Rate from './Rate';

class ArticlePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const { getSingleArticle, match } = this.props;
    const { articleId } = match.params;
    await getSingleArticle(articleId);
  }

  componentWillUnmount() {
    const { reset } = this.props;
    reset();
  }

  sortComment = comment => {
    const sortedComment = comment.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    return sortedComment;
  };

  render() {
    const {
      singleArticle,
      match,
      postComment,
      rateArticle,
      isLoadingReducer,
      user,
    } = this.props;

    const { articleId } = match.params;
    const { article, comments, error } = singleArticle;
    const { userProfile } = user;
    const { profile } = userProfile;

    if (error) {
      const { history } = this.props;
      history.push('/notfound');
    }
    const { loader: isLoading } = isLoadingReducer;

    return (
      <React.Fragment>
        <NavBar />
        {isLoading && <Loader />}
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
                      {Object.keys(article).length ? (
                        <div>
                          <ReadingCard article={article} />
                          <Rate
                            articleId={articleId}
                            rateArticle={rateArticle}
                            likes={article.likes_count}
                          />
                        </div>
                      ) : (
                        <p>Loading...</p>
                      )}
                    </div>
                  </Grid.Column>
                  <h3>Comments</h3>
                  {Object.keys(article).length && (
                    <InputComment
                      imageUrl={profile && profile.image_url}
                      articleId={article.id}
                      postComment={postComment}
                    />
                  )}
                  <div>
                    {this.sortComment(comments).map(comment => (
                      <ViewComment
                        key={comment.id}
                        comment={comment}
                        imageUrl={article.author && article.author.image_url}
                        articleId={articleId}
                      />
                    ))}
                  </div>
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
  postComment: PropTypes.func.isRequired,
  match: PropTypes.shape(PropTypes.objectOf).isRequired,
  singleArticle: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
  rateArticle: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  isLoadingReducer: PropTypes.shape({
    loader: PropTypes.bool,
  }).isRequired,
  user: PropTypes.shape().isRequired,
};

export default withRouter(ArticlePage);
