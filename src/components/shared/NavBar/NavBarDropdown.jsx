import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { decodeToken } from '../../../utils/authService';

class NavDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDropdown: false,
      isAdmin: false,
    };
  }

  componentDidMount() {
    const { getProfile } = this.props;
    getProfile();
  }

  toggleDropdown = () => {
    const user = decodeToken();
    this.setState(prevState => ({
      openDropdown: !prevState.openDropdown,
      isAdmin: user.isAdmin,
    }));
  };

  render() {
    const { openDropdown, isAdmin } = this.state;
    const { user } = this.props;
    const { userProfile } = user;
    const { profile } = userProfile;
    return (
      <div>
        <button
          type="button"
          className="nav-drp-btn"
          onClick={this.toggleDropdown}
        >
          <div className="nav-drp-btn-ctn">
            <img
              className="nav-drp-pic"
              src={
                !profile || !profile.image_url
                  ? 'https://res.cloudinary.com/sojidan/image/upload/v1557149927/avatar.png'
                  : profile.image_url
              }
              alt=""
            />
            <i className="fas fa-caret-down" />
            {openDropdown ? (
              <div className="dropdown-content">
                <Link to="/profile">My Profile</Link>
                {isAdmin && <Link to="/admin">Admin</Link>}
                <Link to="/logout">Logout</Link>
              </div>
            ) : null}
          </div>
        </button>
      </div>
    );
  }
}

NavDropdown.propTypes = {
  getProfile: PropTypes.func.isRequired,
  user: PropTypes.shape().isRequired,
};

export default NavDropdown;
