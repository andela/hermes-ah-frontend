import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class NavDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDropdown: false,
      userPic:
        'https://res.cloudinary.com/sojidan/image/upload/v1557149927/avatar.png',
    };
  }

  async componentDidMount() {
    const { getProfile, getSuggestions } = this.props;
    await getProfile();
    getSuggestions();
  }

  componentDidUpdate = prevProps => {
    const { userProfile: userProps } = this.props;
    const { userProfile } = userProps;
    if (prevProps.userProfile !== userProps) {
      const { profile } = userProfile;
      if (profile) {
        this.setState({ userPic: profile.image_url });
      }
    }
  };

  toggleDropdown = () => {
    this.setState(prevState => ({ openDropdown: !prevState.openDropdown }));
  };

  render() {
    const { openDropdown, userPic } = this.state;
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
                !userPic
                  ? 'https://res.cloudinary.com/sojidan/image/upload/v1557149927/avatar.png'
                  : userPic
              }
              alt=""
            />
            <i className="fas fa-caret-down" />
            {openDropdown ? (
              <div className="dropdown-content">
                <Link to="/profile">My Profile</Link>
                <Link to="/create-article">Create Article</Link>
                <Link to="/logout">Logout</Link>
                <Link to="/admin">Admin</Link>
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
  getSuggestions: PropTypes.func.isRequired,
  userProfile: PropTypes.shape().isRequired,
};

export default NavDropdown;
