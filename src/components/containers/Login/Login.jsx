import { Form, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';
import NavBar from '../../shared/NavBar/NavBar';
import FormComponent from '../../shared/Form/Form';
import navLinks from '../../../utils/headers';
import { login } from '../../../actions/auth.actions';
import Loader from '../../shared/Loader/Loader';

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
    await loginUser(data);
  };

  render() {
    const { auth } = this.props;
    return (
      <div>
        {auth.isLoading && <Loader />}
        <React.Fragment>
          <NavBar navLinks={navLinks.auth} />
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
              <Form unstackable onSubmit={this.handelClick}>
                {this.renderInput('email', 'Email', 'email')}
                {this.renderInput('password', 'Password', 'password')}
                <Link to="/password-rest" className="forgot-password">
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

const mapStateToProps = auth => auth;

export default connect(
  mapStateToProps,
  { login }
)(Login);
