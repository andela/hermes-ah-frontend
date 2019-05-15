import { connect } from 'react-redux';
import NewArticle from '../presentations/NewArticle/NewArticle';
import { postArticle } from '../../actions/article.actions';

const mapStateToProps = ({ articles }) => ({ articles });

const Article = connect(
  mapStateToProps,
  { postArticle }
)(NewArticle);

export default Article;
