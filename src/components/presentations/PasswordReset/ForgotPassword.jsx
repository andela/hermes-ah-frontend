import { Form, Button } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import React from 'react';
import FormComponent from '../../shared/Form/Form';
import Loader from '../../shared/Loader/Loader';
import './forgotpassword.scss';

/**
 * @description ForgotPasswordPage view method
 * @returns {HTMLDivElement} profile
 * @param {object} e event object
 */
class ForgotPassword extends FormComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: { email: '' },
    };
  }

  /**
   * @param {object} str event object
   * @returns {object} state
   */

  handelClick = async e => {
    e.preventDefault();
    const { data } = this.state;
    const { forgotPassword: userForgotPassword } = this.props;
    await userForgotPassword(data);
  };

  /**
   * @returns {HTMLElement} div
   */
  render() {
    const { isLoadingReducer, user } = this.props;
    const { loader } = isLoadingReducer;
    if (user) return <Redirect to="/" />;
    return (
      <div className="forgot-password">
        {loader && <Loader />}
        <React.Fragment>
          <div className="form-wrap">
            <div className="form-cont">
              <Form unstackable onSubmit={this.handelClick}>
                <p>FORGOT PASSWORD</p>
                {this.renderInput('email', 'Email', 'email')}
                <Button className="submit" type="submit">
                  Reset my password
                </Button>
              </Form>
            </div>
          </div>
        </React.Fragment>
      </div>
    );
  }
}
export default ForgotPassword;
