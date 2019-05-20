import { Form, Button } from 'semantic-ui-react';
import React from 'react';
import { Redirect } from 'react-router-dom';
import FormComponent from '../../shared/Form/Form';
import Loader from '../../shared/Loader/Loader';
import { setToken } from '../../../utils/authService';
import './forgotpassword.scss';
import NavBar from '../../shared/NavBar/NavBar';

class ResetPassword extends FormComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: { password: '', confirmPassword: '' },
      token: '',
    };
  }

  componentDidMount() {
    const token = this.props.location.search.split('=')[1];
    if (token) {
      setToken(token);
      this.setState({ token });
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { data, token } = this.state;
    const { resetPassword: userForgotPassword } = this.props;
    await userForgotPassword(data, token);
  };

  render() {
    const confirmPasswordIdType = 'confirmPassword';
    const confirmPasswordPlaceHolder = 'Confirm Password';
    const passwordIdType = 'password';
    const passwordPlaceHolder = 'New Password';
    const { isLoadingReducer, user } = this.props;
    const { userProfile } = user;
    const { loader } = isLoadingReducer;
    const { handleSubmit } = this;
    if (Object.keys(userProfile).length) return <Redirect to="/" />;
    return (
      <React.Fragment>
        <NavBar />
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
      </React.Fragment>
    );
  }
}
export default ResetPassword;
