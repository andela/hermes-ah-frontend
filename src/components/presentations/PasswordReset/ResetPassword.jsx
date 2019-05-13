import { Form, Button } from 'semantic-ui-react';
import React from 'react';
import { Redirect } from 'react-router-dom';
import FormComponent from '../../shared/Form/Form';
import Loader from '../../shared/Loader/Loader';
import './forgotpassword.scss';

class ResetPassword extends FormComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: { password: '', confirmPassword: '' },
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { data } = this.state;
    const { resetPassword: userForgotPassword } = this.props;
    await userForgotPassword(data);
  };

  render() {
    const confirmPasswordIdType = 'confirmPassword';
    const confirmPasswordPlaceHolder = 'Confirm Password';
    const passwordIdType = 'password';
    const passwordPlaceHolder = 'New Password';
    const { isLoadingReducer, user } = this.props;
    const { loader } = isLoadingReducer;
    const { handleSubmit } = this;
    if (user) return <Redirect to="/" />;
    return (
      <div className="forgot-password">
        {loader && <Loader />}
        <React.Fragment>
          <div className="form-wrap">
            <div className="form-cont">
              <Form unstackable onSubmit={handleSubmit}>
                <p>Reset Password</p>
                {this.renderInput(
                  passwordIdType,
                  passwordPlaceHolder,
                  passwordIdType
                )}
                {this.renderInput(
                  confirmPasswordIdType,
                  confirmPasswordPlaceHolder,
                  passwordIdType
                )}
                <Button className="submit" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </React.Fragment>
      </div>
    );
  }
}
export default ResetPassword;
