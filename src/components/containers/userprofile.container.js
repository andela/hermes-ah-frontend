import { connect } from 'react-redux';
import Userprofile from '../presentations/UserProfile/UserProfile';

const mapStateToProps = ({ userProfile, articles }) => ({
  userProfile,
  articles,
});

const UserprofileContainer = connect(
  mapStateToProps,
  {}
)(Userprofile);

export default UserprofileContainer;
