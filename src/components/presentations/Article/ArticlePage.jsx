/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
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

  render() {
    const {
      singleArticle,
      match,
      postComment,
      rateArticle,
      isLoadingReducer,
      reportArticle,
      user,
    } = this.props;
    const { articleId } = match.params;
    const { article, comments } = singleArticle;
    const { userProfile } = user;
    const { profile } = userProfile;

    const { loader: isLoading } = isLoadingReducer;

    // sort comment based on the greater time in descending order
    const sortComment = comments.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    const url = window.location.href;
    return (
      <React.Fragment>
        <NavBar />
        {isLoading && <Loader />}
        <div className="article-page">
          <Grid>
            <Grid.Row columns={3}>
              <Grid.Column computer={2} mobile={16}>
                <div className="section">
                  {article.author && (
                    <div className="social-sharing">
                      <div className="facebook-share">
                        <a
                          href={`https://www.facebook.com/dialog/feed?app_id=370972486842144
                          &redirect_uri=https://develop--hermes-ah.netlify.com
                          &link=${url}
                          &picture=${article.image_url}
                          &caption=${article.abstract}`}
                          target="_blank"
                        >
                          <i className="fab fa-facebook-f" />
                        </a>
                      </div>
                      <div className="twitter-share">
                        <a
                          href={`https://twitter.com/intent/tweet?text=${
                            article.title
                          } by ${article.author.first_name}${
                            article.author.last_name
                          } ${url}`}
                          target="_blank"
                          data-size="large"
                        >
                          <i className="fab fa-twitter" />
                        </a>
                      </div>
                      <div className="bookmark">
                        <i className="far fa-bookmark" />
                      </div>
                      <div className="like">
                        <i className="far fa-thumbs-up" />
                        <p>{article.likes_count}</p>
                      </div>
                    </div>
                  )}
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
                            reportArticle={reportArticle}
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
                    {sortComment.map(comment => (
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
  rateArticle: PropTypes.func.isRequired,
  isLoadingReducer: PropTypes.shape({
    loader: PropTypes.bool,
  }).isRequired,
  reportArticle: PropTypes.func.isRequired,
  user: PropTypes.shape().isRequired,
};

export default ArticlePage;
