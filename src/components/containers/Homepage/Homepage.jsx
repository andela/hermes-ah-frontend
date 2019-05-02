import React, { Component } from 'react';
import { Container, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import HeroView from '../../presentations/Hero-view/Heroview-presentations';
import NavBar from '../../shared/NavBar/NavBar';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <NavBar>
          <Link to="/about">
            <Menu.Item className="navbar-item">ABOUT</Menu.Item>
          </Link>
          <Menu.Item className="navbar-item">CATEGORIES</Menu.Item>
          <Link to="/login">
            <Menu.Item className="navbar-item">LOGIN</Menu.Item>
          </Link>
          <Link to="/signup">
            <Menu.Item className="navbar-item active">SIGNUP</Menu.Item>
          </Link>
        </NavBar>
        <Container text>
          <HeroView />
        </Container>
      </React.Fragment>
    );
  }
}

export default Homepage;
