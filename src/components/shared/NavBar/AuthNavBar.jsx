import React from 'react';
import { Menu } from 'semantic-ui-react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NavDropdown from '../../containers/nav.container';
import './navbar.scss';

const AuthNavBar = ({ navItems }) => (
  <div className="nav-items">
    {navItems.map(child => (
      <Link key={child.text} to={child.link}>
        <Menu.Item className={`navbar-item ${child.className}`}>
          {child.text}
        </Menu.Item>
      </Link>
    ))}
    <NavDropdown />
  </div>
);

AuthNavBar.propTypes = {
  navItems: propTypes.arrayOf(Object).isRequired,
};

export default AuthNavBar;
