import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import store from './store/store';
import HomePageContainer from './components/containers/homepage.container';
import LoginContainer from './components/containers/login.container';
import Notfound from './components/presentations/Notfound/Notfound';
import Footer from './components/shared/Footer/Footer';
import NavBar from './components/shared/NavBar/NavBar';
import AboutPage from './components/presentations/AboutPage/AboutPage';
import Profilepage from './components/containers/profile.container';
import ForgotPassword from './components/containers/passwordReset.containers';
import ResetPassword from './components/presentations/PasswordReset/ResetPassword';
import { decodeToken } from './utils/authService';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const user = decodeToken();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <ToastContainer />
            <NavBar user={user} />
            <Switch>
              <Route path="/profile" component={Profilepage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/about" component={AboutPage} />
              <Route path="/reset-password" component={ResetPassword} />
              <Route path="/not-found" component={Notfound} />
              <Route
                path="/login"
                render={props => <LoginContainer {...props} user={user} />}
              />
              <Route path="/not-found" component={Notfound} />
              <Route path="/" exact component={HomePageContainer} />
              <Route path="/about" component={AboutPage} />
              <Redirect to="/not-found" />
            </Switch>
            <Footer />
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

Provider.propTypes = {
  store: PropTypes.shape().isRequired,
};

export default App;
