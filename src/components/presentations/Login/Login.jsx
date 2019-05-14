import { Form, Button } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';
import React from 'react';
import FormComponent from '../../shared/Form/Form';
import Loader from '../../shared/Loader/Loader';
import NavBar from '../../shared/NavBar/NavBar';

class Login extends FormComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: { email: '', password: '' },
    };
  }

  handelClick = async e => {
    e.preventDefault();
    const { data } = this.state;
    const { login: loginUser } = this.props;
    await loginUser(data, this.props);
  };

  render() {
    const emailIdType = 'email';
    const emailPlaceHolder = 'Email';
    const passwordIdType = 'password';
    const passwordPlaceHolder = 'Password';
    const { user, isLoadingReducer } = this.props;
    const { userProfile } = user;
    const { loader } = isLoadingReducer;
    if (userProfile) return <Redirect to="/" />;
    return (
      <div>
        <NavBar />
        {loader && <Loader />}
        <React.Fragment>
          <div className="form-wrap">
            <div className="form-cont">
              <div className="wrap-cont-login-signup">
                <div className="button-container">
                  <Button className="login current-login">LOGIN</Button>
                </div>
                <div className="button-container">
                  <Link to="/signup">
                    <Button className="signup">SIGNUP</Button>
                  </Link>
                </div>
              </div>
              <Form unstackable onSubmit={this.handelClick}>
                {this.renderInput(emailIdType, emailPlaceHolder, emailIdType)}
                {this.renderInput(
                  passwordIdType,
                  passwordPlaceHolder,
                  passwordIdType
                )}
                <Link to="/forgot-password" className="forgot-password">
                  Forgot password?
                </Link>
                <Button className="submit" type="submit">
                  LOGIN
                </Button>
                {this.renderRuler()}
              </Form>
              {this.renderSocialLogin()}
            </div>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default Login;
