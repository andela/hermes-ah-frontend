import { connect } from 'react-redux';
import Login from '../presentations/Login/Login';
import { login } from '../../actions/auth.actions';

const mapStateToProps = auth => auth;

const LoginContainer = connect(
  mapStateToProps,
  { login }
)(Login);

export default LoginContainer;
