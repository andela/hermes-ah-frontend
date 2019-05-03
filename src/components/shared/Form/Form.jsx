import React from 'react';
import propTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './form.scss';

const FormField = props => {
  const {
    form,
    forgotPassword,
    loginValue,
    signupValue,
    submitValue,
    spanValue,
  } = props;
  return (
    <div className="form-cont">
      <div className="wrap-cont-login-signup">
        <Button className="login">{loginValue}</Button>
        <Button className="signup">{signupValue}</Button>
      </div>
      <Form unstackable>
        <Form.Group widths>
          {form.map(formInput => (
            <Form.Input
              key={formInput.label}
              placeholder={formInput.placeholder}
              type={formInput.type}
            />
          ))}
        </Form.Group>
        <Link to="/password-rest" className="forgot-password">
          {forgotPassword}
        </Link>
        <Button className="submit" type="submit">
          {submitValue}
        </Button>
        <div className="hr-bar">
          <hr className="bar" />
          <span className="span-text">{spanValue}</span>
          <hr className="bar" />
        </div>
      </Form>
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
    </div>
  );
};

FormField.defaultProps = {
  // forgotPassword: (propTypes.string = ''),
  loginValue: (propTypes.string = ''),
  signupValue: (propTypes.string = ''),
  submitValue: (propTypes.string = ''),
  spanValue: (propTypes.string = ''),
};

FormField.propTypes = {
  form: propTypes.arrayOf(propTypes.shape).isRequired,
  forgotPassword: propTypes.string.isRequired,
  loginValue: propTypes.string,
  signupValue: propTypes.string,
  submitValue: propTypes.string,
  spanValue: propTypes.string,
};

export default FormField;
