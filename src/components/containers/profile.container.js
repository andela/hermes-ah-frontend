import { connect } from 'react-redux';
import Profilepage from '../presentations/Profilepage/ProfilePage';
import profileAction from '../../actions/profile.action';
import fetchArticles from '../../actions/articles-update.actions';
import fetchBookmarks from '../../actions/bookmarked.action';

const { getProfile } = profileAction;

const mapStateToProps = ({
  userProfile,
  articlesUpdate,
  isLoadingReducer,
  bookmarkedArticles,
}) => ({
  userProfile,
  articlesUpdate,
  isLoadingReducer,
  bookmarkedArticles,
});

const ProfilepageContainer = connect(
  mapStateToProps,
  { getProfile, fetchArticles, fetchBookmarks }
)(Profilepage);

export default ProfilepageContainer;
