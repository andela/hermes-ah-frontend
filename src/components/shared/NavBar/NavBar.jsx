import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import propTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo_transparent.png';
// import profileImage from '../../../assets/images/Screenshot 2019-04-08 at 10.57.29 AM.png';
import './navbar.scss';

class NavBar extends Component {
  state = {};

  render() {
    const { children } = this.props;
    return (
      <Menu>
        <Menu.Menu className="logo-cont">
          <Menu.Item>
            <img className="logo" src={logo} alt="logo" size="small" />
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu className="nav-cont">{children}</Menu.Menu>
      </Menu>
    );
  }
}

NavBar.defaultProps = {
  children: (propTypes.defaultProps = ''),
};

NavBar.propTypes = {
  children: propTypes.oneOfType([propTypes.object, propTypes.string]),
};

export default NavBar;

/* <Header>
    <Image circular src={logo} />
    <List link>
      <Link to="/">
        <List.Item>ABOUT</List.Item>
      </Link>
      <Link to="/">
        <List.Item>CATEGORIES</List.Item>
      </Link>
      <Link to="/">
        <List.Item>LOGIN</List.Item>
      </Link>
      <Link to="/">
        <List.Item active>SIGNUP</List.Item>
      </Link>
    </List>
  </Header> */
