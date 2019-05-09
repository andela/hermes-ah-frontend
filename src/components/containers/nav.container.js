import { connect } from 'react-redux';
import NavComponent from '../shared/NavBar/NavBarDropdown';
import profileAction from '../../actions/profile.action';

const { getProfile } = profileAction;

const mapStateToProps = ({ userProfile }) => ({ userProfile });

const Nav = connect(
  mapStateToProps,
  { getProfile }
)(NavComponent);

export default Nav;
