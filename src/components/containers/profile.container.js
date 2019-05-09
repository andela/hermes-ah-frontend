import { connect } from 'react-redux';
import Profilepage from '../presentations/Profilepage/ProfilePage';
import profileAction from '../../actions/profile.action';
import fetchArticles from '../../actions/articles-update.actions';
import followeeAction from '../../actions/followee.actions';
import followingAction from '../../actions/following.actions';
import fetchBookmarks from '../../actions/bookmarked.action';

const { getProfile } = profileAction;
const { getFollowee } = followeeAction;
const { getFollowing } = followingAction;

const mapStateToProps = ({
  userProfile,
  articlesUpdate,
  userFollowee,
  userFollowing,
  isLoadingReducer,
  bookmarkedArticles,
}) => ({
  userProfile,
  articlesUpdate,
  userFollowee,
  userFollowing,
  isLoadingReducer,
  bookmarkedArticles,
});

const ProfilepageContainer = connect(
  mapStateToProps,
  { getProfile, fetchArticles, getFollowee, getFollowing, fetchBookmarks }
)(Profilepage);

export default ProfilepageContainer;
