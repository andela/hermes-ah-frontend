import { connect } from 'react-redux';
import NavComponent from '../shared/NavBar/NavBarDropdown';
import profileAction from '../../actions/profile.action';

const { getProfile, getSuggestions } = profileAction;

const mapStateToProps = ({ userProfile }) => ({ userProfile });

const Nav = connect(
  mapStateToProps,
  { getProfile, getSuggestions }
)(NavComponent);

export default Nav;
