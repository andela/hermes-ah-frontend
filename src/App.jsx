import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import store from './utils/store';
import Homepage from './components/containers/Homepage/Homepage';
import Login from './components/containers/Login/Login';
import NavBar from './components/shared/NavBar/NavBar';
import Notfound from './components/containers/Notfound/Notfound';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/not-found" component={Notfound} />
            <Route path="/" exact component={Homepage} />
            <Route path="/nav" exact component={NavBar} />
            <Redirect to="/not-found" />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
