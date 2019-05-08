import { connect } from 'react-redux';
import ResetPassword from '../presentations/PasswordReset/ResetPassword';
import { resetPassword } from '../../actions/resetPassword.actions';

const mapStateToProps = userResetPassword => userResetPassword;

const userResetPasswordController = connect(
  mapStateToProps,
  { resetPassword }
)(ResetPassword);

export default userResetPasswordController;
