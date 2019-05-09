import { Component } from 'react';
import { setToken } from '../../../utils/authService';

class SocialLogin extends Component {
  componentDidMount() {
    const socialLoginToken = window.location.href.split('?')[1];
    if (socialLoginToken) {
      setToken(socialLoginToken);
      window.location = '/';
    }
  }

  render() {
    return null;
  }
}

export default SocialLogin;
