import { Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import React from 'react';
import NavBar from '../../shared/NavBar/NavBar';
import FormComponent from '../../shared/Form/Form';
import navLinks from '../../../utils/headers';
import Loader from '../../shared/Loader/Loader';
import { forgotPassword } from '../../../actions/forgotPassword.actions';
import './forgotpassword.scss';

class ForgotPassword extends FormComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: { email: '' },
    };
  }

  handelClick = async e => {
    e.preventDefault();
    const { data } = this.state;
    const { forgotPassword: userForgotPassword } = this.props;
    await userForgotPassword(data);
  };

  render() {
    const { auth } = this.props;
    return (
      <div>
        {auth && <Loader />}
        <React.Fragment>
          <NavBar navLinks={navLinks.reset} />
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
const mapStateToProps = auth => auth;

export default connect(
  mapStateToProps,
  { forgotPassword }
)(ForgotPassword);
