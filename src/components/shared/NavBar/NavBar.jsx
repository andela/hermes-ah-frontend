import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo_transparent.png';
import './navbar.scss';

class NavBar extends Component {
  state = {};

  render() {
    const { navLinks } = this.props;
    return (
      <Menu>
        <Menu.Menu className="logo-cont">
          <Menu.Item>
            <Link to="/">
              <img className="logo" src={logo} alt="logo" size="small" />
            </Link>
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu className="nav-cont">
          {navLinks.map(child => (
            <Link key={child.text} to={child.link}>
              <Menu.Item className={`navbar-item ${child.className}`}>
                {child.text}
              </Menu.Item>
            </Link>
          ))}
        </Menu.Menu>
      </Menu>
    );
  }
}

NavBar.propTypes = {
  navLinks: propTypes.arrayOf(propTypes.shape).isRequired,
};

export default NavBar;
