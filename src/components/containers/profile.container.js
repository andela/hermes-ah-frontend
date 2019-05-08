import { connect } from 'react-redux';
import Profilepage from '../presentations/Profilepage/ProfilePage';
import profileAction from '../../actions/profile.action';
import fetchArticles from '../../actions/articles-update.actions';

const { getProfile } = profileAction;

const mapStateToProps = ({
  userProfile,
  articlesUpdate,
  isLoadingReducer,
}) => ({
  userProfile,
  articlesUpdate,
  isLoadingReducer,
});

const ProfilepageContainer = connect(
  mapStateToProps,
  { getProfile, fetchArticles }
)(Profilepage);

export default ProfilepageContainer;
