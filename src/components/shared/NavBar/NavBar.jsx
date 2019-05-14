/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import navLinks from '../../../utils/headers';
import AuthNavBar from './AuthNavBar';
import './navbar.scss';

const { auth } = navLinks;

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { user } = this.props;
    return (
      <div className="nav-header">
        <Menu>
          <Menu.Menu className="logo-cont">
            <Menu.Item>
              <Link to="/">
                <img
                  className="logo"
                  src="https://res.cloudinary.com/mchardex/image/upload/v1556818629/logo_transparent.png"
                  alt="logo"
                  size="small"
                />
              </Link>
            </Menu.Item>
            <Menu.Item className="hamburger">
              <label htmlFor="checker">
                <i className="fas fa-bars" />
              </label>
            </Menu.Item>
          </Menu.Menu>
          <input type="checkbox" id="checker" className="mini-menu" />
          <Menu.Menu className="nav-cont">
            {user && <AuthNavBar navItems={auth} />}
            {!user &&
              navLinks.anonymous.map(child => (
                <Link key={child.text} to={child.link}>
                  <Menu.Item className={`navbar-item ${child.className}`}>
                    {child.text}
                  </Menu.Item>
                </Link>
              ))}
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

NavBar.defaultProps = {
  user: (propTypes.defaultProps = null),
};

NavBar.propTypes = {
  user: propTypes.shape(Object),
};

export default NavBar;
