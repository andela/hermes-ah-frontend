import { connect } from 'react-redux';
import Userprofile from '../presentations/UserProfile/Userprofile';

const mapStateToProps = ({ userProfile }) => ({ userProfile });

const UserprofileContainer = connect(
  mapStateToProps,
  {}
)(Userprofile);

export default UserprofileContainer;
