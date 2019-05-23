import { connect } from 'react-redux';
import ArticlePage from '../presentations/Article/ArticlePage';
import { getSingleArticle, reset } from '../../actions/singleArticle.actions';
import { rateArticle } from '../../actions/article.actions';
import { postComment } from '../../actions/comment.actions';

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
    reset,
  }
)(ArticlePage);

export default SingleArticlePageContainer;
