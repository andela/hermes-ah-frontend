import { connect } from 'react-redux';
import Articles from '../presentations/AuthorArticles/Articles';
import fetchArticles from '../../actions/articles-update.actions';

import '../presentations/AuthorArticles/author-articles.scss';

const mapStateToProps = ({ articlesUpdate }) => ({ articlesUpdate });

const matchDispatchToProps = dispatch => {
  return {
    fetchArticles: () => {
      dispatch(fetchArticles());
    },
  };
};

const ArticleContainer = connect(
  mapStateToProps,
  matchDispatchToProps
)(Articles);

export default ArticleContainer;
