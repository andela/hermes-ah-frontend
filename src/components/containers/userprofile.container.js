import { connect } from 'react-redux';
import Userprofile from '../presentations/UserProfile/UserProfile';
import profileAction from '../../actions/profile.action';

const { updateProfile } = profileAction;

const mapStateToProps = ({ userProfile, articles }) => ({
  userProfile,
  articles,
});

const UserprofileContainer = connect(
  mapStateToProps,
  { updateProfile }
)(Userprofile);

export default UserprofileContainer;
