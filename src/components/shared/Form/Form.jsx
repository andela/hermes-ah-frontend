/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'semantic-ui-react';
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
        <Link onClick={this.onTwitterButtonClick}>
          <i className="fab fa-twitter" />
        </Link>
        <Link onClick={this.onGoogleButtonClick}>
          <i className="fab fa-google" />
        </Link>
        <Link onClick={this.onFacebookButtonClick}>
          <i className="fab fa-facebook-f" />
        </Link>
      </div>
    );
  };

  render() {
    return null;
  }
}

export default FormComponent;
