import React, { Component } from 'react';
import { Form, Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './login.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <main>
          <section className="container form-container">
            <div className="card-componenet">
              <Card>
                <Form className="container form-container">
                  <span className="login-display">LOGIN</span>
                  <span className="signup-display">SIGNUP</span>
                  <Form.Field>
                    <input placeholder="Email" />
                  </Form.Field>
                  <Form.Field>
                    <input placeholder="Password" />
                  </Form.Field>
                  <Form.Field>
                    <div className="forgot--reset">
                      <Link
                        to="/password-reset"
                        className="text--color--grey text"
                      >
                        Forgot Password?
                      </Link>
                    </div>
                  </Form.Field>
                  <button type="submit" className="btn btn-primary">
                    LOGIN
                  </button>
                  <div className="first-section">
                    <span className="optional-login">or login with</span>
                  </div>
                  <br />
                  <i className="fab fa-facebook" />
                  <i className="fab fa-google" />
                  <i className="fab fa-twitter-square" />
                </Form>
              </Card>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Login;
