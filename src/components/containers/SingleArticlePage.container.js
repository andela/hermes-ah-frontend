import { connect } from 'react-redux';
import ArticlePage from '../presentations/Article/ArticlePage';
import { getSingleArticle } from '../../actions/singleArticle.actions';

const mapStateToProps = ({ singleArticle }) => ({ singleArticle });

const SingleArticlePageContainer = connect(
  mapStateToProps,
  {
    getSingleArticle,
  }
)(ArticlePage);

export default SingleArticlePageContainer;
