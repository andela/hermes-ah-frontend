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
    const { getProfile } = this.props;
    await getProfile();
  }

  componentDidUpdate = prevProps => {
    const { user } = this.state;
    const { userProfile: userProps } = this.props;
    const { userProfile } = userProps;
    if (prevProps.userProfile !== userProps && user) {
      const { profile } = userProfile;
      this.setState({ userPic: profile.image_url });
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
            <img className="nav-drp-pic" src={userPic} alt="" />
            <i className="fas fa-caret-down" />
            {openDropdown ? (
              <div className="dropdown-content">
                <Link to="/profile">My Profile</Link>
                <Link to="/">Logout</Link>
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
  userProfile: PropTypes.shape().isRequired,
};

export default NavDropdown;
