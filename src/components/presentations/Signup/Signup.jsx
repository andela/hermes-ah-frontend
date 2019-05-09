import { Form, Button } from 'semantic-ui-react';
import { Redirect, Link } from 'react-router-dom';
import React from 'react';
import FormComponent from '../../shared/Form/Form';
import Loader from '../../shared/Loader/Loader';

class Signup extends FormComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
    };
  }

  handelClick = async e => {
    e.preventDefault();
    const { data } = this.state;
    const { signup: signupUser } = this.props;
    await signupUser(data);
  };

  render() {
    const emailIdType = 'email';
    const emailPlaceHolder = 'Email';
    const passwordIdType = 'password';
    const passwordPlaceHolder = 'Password';
    const firstnameId = 'firstname';
    const firstnamePlaceholder = 'First Name';
    const lastnameId = 'lastname';
    const lastnamePlaceholder = 'Last Name';
    const confirmPasswordId = 'confirmPassword';
    const confirmPasswordPlaceHolder = 'Confirm Password';
    const { auth, user } = this.props;
    if (user) return <Redirect to="/" />;
    return (
      <div>
        {auth.isLoading && <Loader />}
        <React.Fragment>
          <div className="form-wrap">
            <div className="form-cont">
              <div className="wrap-cont-login-signup">
                <div className="button-container">
                  <Link to="/login">
                    <Button className="signup">LOGIN</Button>
                  </Link>
                </div>
                <div className="button-container">
                  <Button className="login current-signup">SIGNUP</Button>
                </div>
              </div>
              <Form unstackable onSubmit={this.handelClick}>
                {this.renderInput(firstnameId, firstnamePlaceholder)}
                {this.renderInput(lastnameId, lastnamePlaceholder)}
                {this.renderInput(emailIdType, emailPlaceHolder, emailIdType)}
                {this.renderInput(
                  passwordIdType,
                  passwordPlaceHolder,
                  passwordIdType
                )}
                {this.renderInput(
                  confirmPasswordId,
                  confirmPasswordPlaceHolder,
                  passwordIdType
                )}
                <Button className="submit" type="submit">
                  SIGNUP
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

export default Signup;
