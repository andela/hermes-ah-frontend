import React, { Component } from 'react';
// import { Provider } from 'react-redux';
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Redirect,
// } from 'react-router-dom';
// import store from './utils/store';
// import Login from './components/containers/Login/Login';
// import Notfound from './components/containers/Notfound/Notfound';
// import Footer from './components/shared/Footer/Footer';
// import NavBar from './components/shared/NavBar/NavBar';
// import Homepage from './components/containers/Homepage/Homepage';
import AboutPage from './components/presentations/AboutPage/AboutPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const navLinks = [
    //   {
    //     link: '/about',
    //     text: 'About',
    //   },
    //   {
    //     link: '/categories',
    //     text: 'Categories',
    //   },
    //   {
    //     link: '/login',
    //     text: 'Login',
    //   },
    //   {
    //     link: '/signup',
    //     text: 'Signup',
    //     className: 'active',
    //   },
    // ];
    return (
      <AboutPage />
      // <Provider store={store}>
      //   <Router>
      //     <React.Fragment>
      //       <NavBar navLinks={navLinks} />
      //       <Switch>
      //         <Route path="/login" component={Login} />
      //         <Route path="/not-found" component={Notfound} />
      //         <Route path="/" exact component={Homepage} />
      //         <Redirect to="/not-found" />
      //       </Switch>
      //       <Footer />
      //     </React.Fragment>
      //   </Router>
      // </Provider>
    );
  }
}

export default App;
