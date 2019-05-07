import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProfileTab from '../ProfileTab/ProfileTab';
import uploadToCloudnary from '../../../utils/uploadToCloudnary';
import './profilepage.scss';

class Profilepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'following-section',
      firstname: '',
      lastname: '',
      profilePic:
        'https://res.cloudinary.com/dcn7hu7wo/image/upload/v1557149927/avatar.png',
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
        profilePic: profile.image_url,
      });
    }
  };

  changeTab = tab => {
    this.setState({ currentTab: tab });
  };

  handleChange = async () => {
    const form = new FormData();
    const imageData = document.querySelector('input[type="file"]').files[0];
    form.append('file', imageData);
    const res = await uploadToCloudnary(form);
    this.setState({ profilePic: res.url });
  };

  render() {
    const { currentTab, firstname, lastname, profilePic } = this.state;
    return (
      <React.Fragment>
        <div className="profile-header">
          <div className="profile-img-container">
            <img src={profilePic} alt="avatar" />
            <form className="custom-file-upload" encType="multipart/form-data">
              <label htmlFor="file-upload">
                <i className="fa fa-upload" />
                <input
                  type="file"
                  id="file-upload"
                  name="file"
                  onChange={this.handleChange.bind(this)}
                />
              </label>
            </form>
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
            <div>This is the article section</div>
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
