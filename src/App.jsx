import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store/store';
import HomePageContainer from './components/containers/homepage.container';
import LoginContainer from './components/containers/login.container';
import Notfound from './components/presentations/Notfound/Notfound';
import Logout from './components/presentations/Logout/Logout';
import Footer from './components/shared/Footer/Footer';
import AboutPage from './components/presentations/AboutPage/AboutPage';
import Profilepage from './components/containers/profile.container';
import ForgotPassword from './components/containers/passwordReset.containers';
import ResetPassword from './components/containers/resetPassword.containers';
import SignupContainer from './components/containers/signup.container';
import NewArticle from './components/containers/newArticle.container';
import EditArticle from './components/containers/editArticle.container';
import AdminPage from './components/containers/admin.container';
import SingleArticlePage from './components/containers/SingleArticlePage.container';
import ProtectedRoute from './components/shared/ProtectedRoute/ProtectedRoute';
import SocialLogin from './components/presentations/SocialLogin/SocialLogin';
import './assets/stylesheets/index.scss';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <React.Fragment>
          <ToastContainer autoClose={false} />
          <Switch>
            <ProtectedRoute exact path="/profile/" component={Profilepage} />
            <ProtectedRoute
              exact
              path="/create-article/"
              component={NewArticle}
            />
            <Route path="/about/" exact component={AboutPage} />
            <Route
              path="/article/:articleId"
              exact
              component={SingleArticlePage}
            />
            <Route path="/create-article/" exact component={NewArticle} />
            <Route path="/edit-article/" exact component={EditArticle} />
            <Route path="/forgot-password/" exact component={ForgotPassword} />
            <Route path="/admin/" exact component={AdminPage} />
            <Route path="/reset-password/" exact component={ResetPassword} />
            <Route path="/login/" exact component={LoginContainer} />
            <Route path="/signup/" exact component={SignupContainer} />
            <Route path="/logout/" exact component={Logout} />
            <Route path="/auth/social" exact component={SocialLogin} />
            <Route path="/" exact component={HomePageContainer} />
            <Route path="*" component={Notfound} />
          </Switch>
          <Footer />
        </React.Fragment>
      </Router>
    </Provider>
  );
};

Provider.propTypes = {
  store: PropTypes.shape().isRequired,
};

export default App;
