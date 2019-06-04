import { connect } from 'react-redux';
import Profilepage from '../presentations/Profilepage/ProfilePage';
import profileAction from '../../actions/profile.action';
import followeeAction from '../../actions/followee.actions';
import followingAction from '../../actions/following.actions';
import fetchBookmarks from '../../actions/bookmarked.action';
import RequestAction from '../../actions/reviewers-request.action';
import userArticleActions from '../../actions/articles-update.actions';
import statisticAction from '../../actions/statsDaily.actions';

const { getProfile, updateProfile, getSuggestions } = profileAction;
const { getFollowee, followUser } = followeeAction;
const { getFollowing, unFollowUser } = followingAction;
const { getUserRequests } = RequestAction;
const { getDailyStats } = statisticAction;
const { fetchArticles, deleteArticle } = userArticleActions;

const mapStateToProps = ({
  user,
  articlesUpdate,
  userFollowee,
  userFollowing,
  userRequests,
  dailyStats,
  isLoadingReducer,
  bookmarkedArticles,
}) => ({
  user,
  articlesUpdate,
  userFollowee,
  userFollowing,
  userRequests,
  dailyStats,
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
    unFollowUser,
    deleteArticle,
    followUser,
    getDailyStats,
  }
)(Profilepage);

export default ProfilepageContainer;
