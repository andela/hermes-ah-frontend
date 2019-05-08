import { connect } from 'react-redux';
import Profilepage from '../presentations/Profilepage/Profilepage';
import profileAction from '../../actions/profile.actions';
import fetchArticles from '../../actions/articles-update.actions';
import followeeAction from '../../actions/followee.actions';
import followingAction from '../../actions/following.actions';

const { getProfile } = profileAction;
const { getFollowee } = followeeAction;
const { getFollowing } = followingAction;

const mapStateToProps = ({
  userProfile,
  articlesUpdate,
  userFollowee,
  userFollowing,
}) => ({
  userProfile,
  articlesUpdate,
  userFollowee,
  userFollowing,
});

const ProfilepageContainer = connect(
  mapStateToProps,
  { getProfile, fetchArticles, getFollowee, getFollowing }
)(Profilepage);

export default ProfilepageContainer;
