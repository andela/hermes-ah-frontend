/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavBar from '../../shared/NavBar/NavBar';
import ViewComment from './ViewComment';
import ReadingArticleCard from './ReadingArticleCard';
import InputComment from './InputComment';
import Loader from '../../shared/Loader/Loader';
import './Article.scss';
import Rate from './Rate';

class ArticlePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentVal: '',
      articleId: '',
    };
  }

  async componentDidMount() {
    const { getSingleArticle, match } = this.props;
    const { articleId } = match.params;
    this.setState({ articleId });
    await getSingleArticle(articleId);
  }

  componentWillUnmount() {
    const { reset } = this.props;
    reset();
  }

  handleCommentInput = e => {
    const { value } = e.target;
    this.setState({ commentVal: value });
  };

  sendComment = e => {
    e.preventDefault();
    const { commentVal } = this.state;
    const data = {
      article_id: e.target.id,
      body: commentVal,
    };
    const { postComment } = this.props;
    postComment(data);
    this.setState({ commentVal: '' });
  };

  onEnterSubmit = e => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      const { commentVal } = this.state;
      const data = {
        article_id: e.target.id,
        body: commentVal,
      };
      const { postComment } = this.props;
      postComment(data);
      this.setState({ commentVal: '' });
    }
  };

  sortComment = comment => {
    const sortedComment =
      comment &&
      comment.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    return sortedComment;
  };

  render() {
    const {
      singleArticle,
      postComment,
      rateArticle,
      isLoadingReducer,
      reportArticle,
      likeArticle,
      user,
      updateComment,
      getCommentHistory,
      likeComment,
    } = this.props;
    const { article, comments, error, commentHistory } = singleArticle;
    const { userProfile } = user;
    const { profile } = userProfile;
    const { commentVal, articleId } = this.state;

    if (error) {
      return <Redirect to="/notfound" />;
    }

    const { loader: isLoading } = isLoadingReducer;

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
                        <button
                          type="button"
                          onClick={() => {
                            likeArticle(article.id);
                          }}
                        >
                          <i className="far fa-thumbs-up" />
                        </button>
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
                          <ReadingArticleCard article={article} />
                          <Rate
                            commentLength={comments.length}
                            articleId={articleId}
                            rateArticle={rateArticle}
                            reportArticle={reportArticle}
                          />
                        </div>
                      ) : null}
                    </div>
                  </Grid.Column>
                  <h3>Comments</h3>
                  {Object.keys(article).length ? (
                    <InputComment
                      imageUrl={profile && profile.image_url}
                      id={article.id}
                      postComment={postComment}
                      btnValue="Comment"
                      placeholderValue="Write a comment..."
                      commentVal={commentVal}
                      handleChange={this.handleCommentInput}
                      enterKeyFormSubmit={this.onEnterSubmit}
                      submitForm={this.sendComment}
                    />
                  ) : null}
                  <div>
                    {comments &&
                      this.sortComment(comments).map(comment => (
                        <ViewComment
                          key={comment.id}
                          comment={comment}
                          imageUrl={article.author && article.author.image_url}
                          articleId={articleId}
                          handleChange={this.handleCommentInput}
                          commentVal={commentVal}
                          updateComment={updateComment}
                          getCommentHistory={getCommentHistory}
                          commentHistory={commentHistory}
                          profile={profile}
                          likeComment={likeComment}
                        />
                      ))}
                  </div>
                </Grid.Row>
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
  likeArticle: PropTypes.func.isRequired,
  postComment: PropTypes.func.isRequired,
  match: PropTypes.shape(PropTypes.objectOf).isRequired,
  singleArticle: PropTypes.shape({}).isRequired,
  user: PropTypes.shape({}).isRequired,
  rateArticle: PropTypes.func.isRequired,
  isLoadingReducer: PropTypes.shape({
    loader: PropTypes.bool,
  }).isRequired,
  reportArticle: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  updateComment: PropTypes.func.isRequired,
  getCommentHistory: PropTypes.func.isRequired,
  likeComment: PropTypes.func.isRequired,
};

export default ArticlePage;
