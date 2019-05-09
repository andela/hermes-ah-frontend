import { connect } from 'react-redux';
import NewArticle from '../presentations/NewArticle/NewArticle';
import { createNewArticle } from '../../actions/article.actions';

const mapStateToProps = isLoadingReducer => isLoadingReducer;

const NewArticleController = connect(
  mapStateToProps,
  { createNewArticle }
)(NewArticle);

export default NewArticleController;
