import { connect } from 'react-redux';
import Bookmark from '../presentations/Bookmarked/Bookmark';
import bookmark from '../../actions/bookmark.actions';

const mapStateToProps = state => ({
  data: state,
});

const mapDispatchToProps = dispatch => ({
  bookmark: articleId => {
    dispatch(bookmark(articleId));
  },
});

const bookmarkContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Bookmark);

export default bookmarkContainer;
