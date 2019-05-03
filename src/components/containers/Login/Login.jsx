import { Form, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import React from 'react';
import NavBar from '../../shared/NavBar/NavBar';
import FormComponent from '../../shared/Form/Form';
import schema from '../../../utils/schema/login.schema';

const navLinks = [
  {
    link: '/',
    text: 'Home',
  },
  {
    link: '/about',
    text: 'About',
  },
  {
    link: '/categories',
    text: 'Categories',
  },
];

class Login extends FormComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: { email: '', password: '' },
      errors: {},
    };
  }

  schema = { ...schema };

  handelClick = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
  };

  render() {
    return (
      <div>
        <React.Fragment>
          <NavBar navLinks={navLinks} />
          <div className="form-wrap">
            <div className="form-cont">
              <div className="wrap-cont-login-signup">
                <Button className="login">LOGIN</Button>
                <Button
                  className="signup"
                  onClick={() => {
                    window.location = '/signup';
                  }}
                >
                  SIGNUP
                </Button>
              </div>
              <Form unstackable>
                {this.renderError('email')}
                {this.renderInput('email', 'Email', 'email')}
                {this.renderError('password')}
                {this.renderInput('password', 'Password', 'password')}
                <Link to="/password-rest" className="forgot-password">
                  Forgot password?
                </Link>
                <Button
                  className="submit"
                  type="submit"
                  onClick={this.handelClick}
                >
                  LOGIN
                </Button>
                {this.renderRuler()}
              </Form>
              {this.renderSocialLogin()}
            </div>
          </div>
        </React.Fragment>
        );
      </div>
    );
  }
}

export default Login;
