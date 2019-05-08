import { connect } from 'react-redux';
import Profilepage from '../presentations/Profilepage/Profilepage';
import profileAction from '../../actions/profile.actions';
import fetchArticles from '../../actions/articles-update.actions';
import fetchBookmarks from '../../actions/bookmarked.action';

const { getProfile } = profileAction;

const mapStateToProps = ({
  userProfile,
  articlesUpdate,
  bookmarkedArticles,
}) => ({
  userProfile,
  articlesUpdate,
  bookmarkedArticles,
});

const ProfilepageContainer = connect(
  mapStateToProps,
  { getProfile, fetchArticles, fetchBookmarks }
)(Profilepage);

export default ProfilepageContainer;
