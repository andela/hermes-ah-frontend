import { connect } from 'react-redux';
import Profilepage from '../presentations/Profilepage/ProfilePage';
import profileAction from '../../actions/profile.action';
import fetchArticles from '../../actions/articles-update.actions';
import followeeAction from '../../actions/followee.actions';
import followingAction from '../../actions/following.actions';
import fetchBookmarks from '../../actions/bookmarked.action';
import RequestAction from '../../actions/reviewers-request.action';

const { getProfile, updateProfile, getSuggestions } = profileAction;
const { getFollowee } = followeeAction;
const { getFollowing } = followingAction;
const { getUserRequests } = RequestAction;

const mapStateToProps = ({
  user,
  articlesUpdate,
  userFollowee,
  userFollowing,
  userRequests,
  isLoadingReducer,
  bookmarkedArticles,
}) => ({
  user,
  articlesUpdate,
  userFollowee,
  userFollowing,
  userRequests,
  isLoadingReducer,
  bookmarkedArticles,
});

const ProfilepageContainer = connect(
  mapStateToProps,
  {
    getProfile,
    fetchArticles,
    getFollowee,
    getFollowing,
    fetchBookmarks,
    updateProfile,
    getSuggestions,
    getUserRequests,
  }
)(Profilepage);

export default ProfilepageContainer;
