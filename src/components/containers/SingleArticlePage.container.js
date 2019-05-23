import { connect } from 'react-redux';
import ArticlePage from '../presentations/Article/ArticlePage';
import { getSingleArticle } from '../../actions/singleArticle.actions';
import { rateArticle } from '../../actions/article.actions';

const mapStateToProps = ({ singleArticle }) => ({ singleArticle });

const SingleArticlePageContainer = connect(
  mapStateToProps,
  {
    getSingleArticle,
    rateArticle,
  }
)(ArticlePage);

export default SingleArticlePageContainer;
