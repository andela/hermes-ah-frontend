import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './utils/store';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
<<<<<<< HEAD
    return <React.Fragment />;
=======
    return (
      <Provider store={store}>
        <div>
          <h1>Welcome to Ah</h1>
        </div>
      </Provider>
    );
>>>>>>> 04391e6... 164797968-chore(setup): setup redux
  }
}

export default App;
