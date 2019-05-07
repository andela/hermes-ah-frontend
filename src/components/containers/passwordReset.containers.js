import { connect } from 'react-redux';
import ForgotPassword from '../presentations/PasswordReset/ForgotPassword';
import { forgotPassword } from '../../actions/forgotPassword.actions';

const mapStateToProps = passwordReset => passwordReset;

const PasswordResetContoller = connect(
  mapStateToProps,
  { forgotPassword }
)(ForgotPassword);

export default PasswordResetContoller;
