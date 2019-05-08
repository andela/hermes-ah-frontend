import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ToastContainer, toast, Zoom } from 'react-toastify';
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
import ResetPassword from './components/containers/resetPassword.containers';
import SignupContainer from './components/containers/signup.container';
import { decodeToken } from './utils/authService';
// import NewArticle from './components/containers/newarticle.container';
import NewArticle from './components/presentations/NewArticle/NewArticle';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: null };
  }

  componentDidMount() {
    const user = decodeToken();
    this.setState({ user });
    if (user && !user.isActivated) {
      toast.info('Please confirm your email address', {
        type: toast.TYPE.INFO,
        closeButton: false,
        transition: Zoom,
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }

  render() {
    const { user } = this.state;
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <ToastContainer autoClose={false} />
            <NavBar user={user} />
            <Switch>
              <Route path="/profile" component={Profilepage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/reset-password" component={ResetPassword} />
              <Route path="/not-found" component={Notfound} />
              <Route path="/new-article" component={NewArticle} />
              <Route
                path="/login"
                render={props => <LoginContainer {...props} user={user} />}
              />
              <Route
                path="/signup"
                render={props => <SignupContainer {...props} user={user} />}
              />
              <Route path="/" exact component={HomePageContainer} />
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
