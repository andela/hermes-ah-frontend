import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProfileTab from '../ProfileTab/ProfileTab';
import './profilepage.scss';
import Articles from '../../containers/article-update.container';

class Profilepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'following-section',
      firstname: '',
      lastname: '',
    };
  }

  componentDidMount = () => {
    const { getProfile } = this.props;
    getProfile();
  };

  componentDidUpdate = prevProps => {
    const { userProfile: userProps } = this.props;
    const { userProfile } = userProps;
    if (prevProps !== this.props) {
      const { profile } = userProfile;
      this.setState({
        firstname: profile.first_name,
        lastname: profile.last_name,
      });
    }
  };

  changeTab = tab => {
    this.setState({ currentTab: tab });
  };

  render() {
    const { currentTab, firstname, lastname } = this.state;
    return (
      <React.Fragment>
        <div className="profile-header">
          <div className="profile-img-container">
            <img
              src="https://res.cloudinary.com/dcn7hu7wo/image/upload/v1556979121/IMG_1763.jpg"
              alt="avatar"
            />
          </div>
          <h1>
            {firstname}
            &nbsp;
            {lastname}
          </h1>
        </div>
        <ProfileTab changeTab={this.changeTab} currentTab={currentTab} />
        <div className="profile-content">
          {currentTab === 'following-section' ? (
            <div>This is the following section</div>
          ) : null}
          {currentTab === 'followers-section' ? (
            <div>This is the follower section</div>
          ) : null}
          {currentTab === 'article-section' ? (
            <div>
              <Articles />
            </div>
          ) : null}
          {currentTab === 'bookmark-section' ? (
            <div>This is the bookmark section</div>
          ) : null}
          {currentTab === 'profile-section' ? (
            <div>This is the profile section</div>
          ) : null}
        </div>
      </React.Fragment>
    );
  }
}

Profilepage.propTypes = {
  getProfile: PropTypes.func.isRequired,
  userProfile: PropTypes.shape().isRequired,
};

export default Profilepage;
