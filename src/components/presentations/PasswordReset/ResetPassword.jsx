import { Form, Button } from 'semantic-ui-react';
import React from 'react';
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
    const { userResetPassword } = this.props;
    const { handleSubmit } = this;
    return (
      <div className="forgot-password">
        {userResetPassword.isLoading && <Loader />}
        <React.Fragment>
          <div className="form-wrap">
            <div className="form-cont">
              <Form unstackable onSubmit={handleSubmit}>
                <p>Reset Password</p>
                {this.renderInput('password', 'New password', 'password')}
                {this.renderInput(
                  'confirmPassword',
                  'confirmPassword',
                  'password'
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
