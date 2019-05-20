import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import './form.scss';

class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { data: {} };
  }

  handleChange = ({ currentTarget: input }) => {
    const { data } = this.state;
    const account = { ...data };
    account[input.id] = input.value;
    this.setState({ data: account });
  };

  renderInput = (id, placeholder, type = 'text') => {
    const { data } = this.state;
    return (
      <Form.Group>
        <Form.Input
          value={data[id]}
          id={id}
          placeholder={placeholder}
          type={type}
          onChange={this.handleChange}
          required
        />
      </Form.Group>
    );
  };

  renderRuler = () => {
    return (
      <div className="hr-bar">
        <hr className="bar" />
        <span className="span-text">or login with</span>
        <hr className="bar" />
      </div>
    );
  };

  onFacebookButtonClick = () => {
    window.location =
      'https://hermes-ah-backend-staging.herokuapp.com/api/v1/auth/facebook';
  };

  onTwitterButtonClick = () => {
    window.location =
      'https://hermes-ah-backend-staging.herokuapp.com/api/v1/auth/twitter';
  };

  onGoogleButtonClick = () => {
    window.location =
      'https://hermes-ah-backend-staging.herokuapp.com/api/v1/auth/google';
  };

  renderSocialLogin = () => {
    return (
      <div className="social-login">
        <Button
          className="social-login-list twitter"
          onClick={this.onTwitterButtonClick}
        >
          <i className="fab fa-twitter" />
        </Button>
        <Button
          className="social-login-list google"
          onClick={this.onGoogleButtonClick}
        >
          <i className="fab fa-google-plus-g" />
        </Button>
        <Button
          className="social-login-list facebook"
          onClick={this.onFacebookButtonClick}
        >
          <i className="fab fa-facebook-f" />
        </Button>
      </div>
    );
  };

  render() {
    return null;
  }
}

export default FormComponent;
