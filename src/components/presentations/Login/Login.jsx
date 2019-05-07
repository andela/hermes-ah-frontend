import { Form, Button } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';
import FormComponent from '../../shared/Form/Form';
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
    const { user, isLoadingReducer } = this.props;
    const { loader } = isLoadingReducer;
    if (user) return <Redirect to="/" />;
    return (
      <div>
        {loader && <Loader />}
        <React.Fragment>
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

const mapStateToProps = auth => auth;

export default connect(
  mapStateToProps,
  { login }
)(Login);
