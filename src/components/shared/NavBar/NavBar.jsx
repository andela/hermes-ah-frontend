import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { toast, Zoom } from 'react-toastify';
import { Link } from 'react-router-dom';
import { decodeToken } from '../../../utils/authService';
import navLinks from '../../../utils/headers';
import AuthNavBar from './AuthNavBar';
import './navbar.scss';

const { auth } = navLinks;

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { user: null };
  }

  componentDidMount() {
    const user = decodeToken();
    this.setState({ user });
    const token = new URLSearchParams(
      document.location.search.substring(1)
    ).get('token');
    if (!token) {
      if (user && !user.isActivated) {
        toast.info('Please confirm your email address', {
          type: toast.TYPE.INFO,
          closeButton: true,
          transition: Zoom,
          position: toast.POSITION.TOP_CENTER,
        });
      }
    }
  }

  render() {
    const { user } = this.state;
    return (
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
        </Menu.Menu>
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
    );
  }
}

export default NavBar;
