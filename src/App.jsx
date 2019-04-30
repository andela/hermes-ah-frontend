import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './utils/store';

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
    );
  }
}

export default App;
