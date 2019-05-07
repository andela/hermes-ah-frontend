import { connect } from 'react-redux';
import Profilepage from '../presentations/Profilepage/Profilepage';
import profileAction from '../../actions/profile.actions';

const { getProfile } = profileAction;

const mapStateToProps = ({ userProfile }) => ({ userProfile });

const ProfilepageContainer = connect(
  mapStateToProps,
  { getProfile }
)(Profilepage);

export default ProfilepageContainer;
