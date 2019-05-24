import { connect } from 'react-redux';
import ArticlePage from '../presentations/Article/ArticlePage';
import { getSingleArticle, reset } from '../../actions/singleArticle.actions';
import { rateArticle } from '../../actions/article.actions';
import { postComment } from '../../actions/comment.actions';
import reportedArticleAction from '../../actions/reported.actions';

const { reportArticle } = reportedArticleAction;

const mapStateToProps = ({ singleArticle, isLoadingReducer, user }) => ({
  singleArticle,
  isLoadingReducer,
  user,
});

const SingleArticlePageContainer = connect(
  mapStateToProps,
  {
    getSingleArticle,
    rateArticle,
    postComment,
    reportArticle,
    reset,
  }
)(ArticlePage);

export default SingleArticlePageContainer;
