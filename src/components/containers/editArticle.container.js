import { connect } from 'react-redux';
import EditAnArticle from '../presentations/EditArticle/EditArticle';
import { editAnArticle } from '../../actions/article.actions';
import { getSingleArticle } from '../../actions/singleArticle.actions';

const mapStateToProps = ({ singleArticle }) => ({
  singleArticle,
  abstract: singleArticle.article.abstract,
});

const EditArticle = connect(
  mapStateToProps,
  { editAnArticle, getSingleArticle }
)(EditAnArticle);

export default EditArticle;
