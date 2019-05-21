import { connect } from 'react-redux';
import EditAnArticle from '../presentations/EditArticle/EditArticle';
import { editAnArticle } from '../../actions/article.actions';

const mapStateToProps = ({ articles }) => ({
  success: articles.success,
  articles,
});

const Article = connect(
  mapStateToProps,
  { editAnArticle }
)(EditAnArticle);

export default Article;
