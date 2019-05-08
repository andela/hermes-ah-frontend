import { connect } from 'react-redux';
import Profilepage from '../presentations/Profilepage/ProfilePage';
import profileAction from '../../actions/profile.action';

const { getProfile } = profileAction;

const mapStateToProps = ({ userProfile, isLoadingReducer }) => ({
  userProfile,
  isLoadingReducer,
});

const ProfilepageContainer = connect(
  mapStateToProps,
  { getProfile }
)(Profilepage);

export default ProfilepageContainer;
