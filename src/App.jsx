import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import store from './utils/store';
import Homepage from './components/containers/Homepage/Homepage';
import Login from './components/containers/Login/Login';
import Notfound from './components/containers/Notfound/Notfound';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/not-found" component={Notfound} />
          <Route path="/" exact component={Homepage} />
          <Redirect to="/not-found" />
        </Switch>
      </Provider>
    );
  }
}

export default App;
