import { connect } from 'react-redux';
import ArticlePage from '../presentations/Article/ArticlePage';
import { getSingleArticle } from '../../actions/singleArticle.actions';
import { rateArticle } from '../../actions/article.actions';
import { postComment } from '../../actions/comment.actions';

const mapStateToProps = ({ singleArticle, isLoadingReducer }) => ({
  singleArticle,
  isLoadingReducer,
});

const SingleArticlePageContainer = connect(
  mapStateToProps,
  {
    getSingleArticle,
    rateArticle,
    postComment,
  }
)(ArticlePage);

export default SingleArticlePageContainer;
