import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './utils/store';
import { Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>Welcome to Ah</h1>
        </div>
      </Provider>
      <div>
        <Switch>
          <Route path="/login" component="" />
          <Route path="/not-found" component="" />
          <Route path="/" exact component="" />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    );
  }
}

export default App;
