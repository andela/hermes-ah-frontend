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

  render() {
    const { passwordReset } = this.props;
    return (
      <div>
        {passwordReset && <Loader />}
        <React.Fragment>
          <div className="form-wrap">
            <div className="form-cont">
              <Form unstackable>
                <p>Reset Password</p>
                {this.renderInput('password', 'NewPassword', 'password')}
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
