import { Form, Button } from 'semantic-ui-react';
import React from 'react';
import NavBar from '../../shared/NavBar/NavBar';
import FormComponent from '../../shared/Form/Form';
import navLinks from '../../../utils/headers';
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
    const { auth } = this.props;
    return (
      <div>
        {auth && <Loader />}
        <React.Fragment>
          <NavBar navLinks={navLinks.reset} />
          <div className="form-wrap">
            <div className="form-cont">
              <Form unstackable>
                <p>Reset Password</p>
                {this.renderInput('password', 'Password', 'password')}
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
