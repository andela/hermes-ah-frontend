import React, { Component } from 'react';
import Form from '../../shared/Form/Form';
import './login.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const form = [
      { label: 'Email', placeholder: 'Email', type: 'text' },
      { label: 'Password', placeholder: 'Password', type: 'password' },
    ];
    return (
      <div>
        <Form form={form} />
      </div>
    );
  }
}

export default Login;
