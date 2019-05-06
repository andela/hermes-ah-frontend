/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import store from './store/store';
import Homepage from './components/presentations/Homepage/Homepage';
import Login from './components/presentations/Login/Login';
import Notfound from './components/presentations/Notfound/Notfound';
import Footer from './components/shared/Footer/Footer';
import NavBar from './components/shared/NavBar/NavBar';
import AboutPage from './components/presentations/AboutPage/AboutPage';
import Profilepage from './components/containers/profile.container';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Switch>
              <Route path="/profile" component={Profilepage} />
              <Route path="/login" component={Login} />
              <Route path="/" exact component={Homepage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/not-found" component={Notfound} />
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
