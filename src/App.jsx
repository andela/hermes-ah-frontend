import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import store from './store/store';
import Homepage from './components/containers/Homepage/Homepage';
import Login from './components/containers/Login/Login';
import Notfound from './components/containers/Notfound/Notfound';
import Footer from './components/shared/Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <Provider store={store}>
          <Router>
            <React.Fragment>
              <Switch>
                <Route path="/login" component={Login} />
                <Route path="/" exact component={Homepage} />
                <Route path="/not-found" component={Notfound} />
                <Redirect to="/not-found" />
              </Switch>
              <Footer />
            </React.Fragment>
          </Router>
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;
