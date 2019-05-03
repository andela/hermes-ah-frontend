import React, { Component } from 'react';
import { Form, Label } from 'semantic-ui-react';
import Joi from 'joi-browser';
import './form.scss';

class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { data: {} };
  }

  validate = () => {
    const options = { abortEarly: false };
    const { data } = this.state;
    const { error } = Joi.validate(data, this.schema, options);
    if (!error) return null;
    const errors = {};
    error.details.map(item => {
      errors[item.path[0]] = item.message.split('"').join('');
      return null;
    });
    return errors;
  };

  handleChange = ({ currentTarget: input }) => {
    const { data } = this.state;
    const account = { ...data };
    account[input.id] = input.value;
    const errors = this.validate();
    this.setState({ data: account, errors: errors || {} });
  };

  renderError = id => {
    const { errors } = this.state;
    if (errors[id]) {
      return (
        <Label basic color="red" pointing="below">
          {errors[id]}
        </Label>
      );
    }
    return null;
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

  renderSocialLogin = () => {
    return (
      <div className="social-login">
        <a href="htttwitter.com">
          <i className="fab fa-twitter" />
        </a>
        <a href="google.com.com">
          <i className="fab fa-google" />
        </a>
        <a href="facebook.com">
          <i className="fab fa-facebook-f" />
        </a>
      </div>
    );
  };

  render() {
    return null;
  }
}

export default FormComponent;
