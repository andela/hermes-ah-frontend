import React, { Component } from 'react';
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
