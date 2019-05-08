import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProfileTab from '../ProfileTab/ProfileTab';
import uploadToCloudnary from '../../../utils/uploadToCloudnary';
import './profilepage.scss';
import Articles from '../UserArticles/Articles';
import Following from '../UserFollwing/Following/Following';
import Followee from '../UserFollwing/Followee/Followee';

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
    const { getProfile, fetchArticles, getFollowee, getFollowing } = this.props;
    getProfile();
    fetchArticles();
    getFollowee();
    getFollowing();
  };

  componentDidUpdate = prevProps => {
    const { userProfile: userProps } = this.props;
    const { userProfile } = userProps;
    if (prevProps.userProfile !== userProps) {
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
    const { articlesUpdate, userFollowee, userFollowing } = this.props;
    const { articles } = articlesUpdate;

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
                  onChange={this.handleChange}
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
        <ProfileTab
          changeTab={this.changeTab}
          currentTab={currentTab}
          totalArticle={`${articles.length}`}
        />
        <div className="profile-content">
          {currentTab === 'following-section' ? (
            <Following userFollowing={userFollowing} />
          ) : null}
          {currentTab === 'followers-section' ? (
            <Followee userFollowee={userFollowee} />
          ) : null}
          {currentTab === 'article-section' ? (
            <div>
              <Articles articlesUpdate={articlesUpdate} />
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
  articlesUpdate: PropTypes.shape().isRequired,
  userFollowee: PropTypes.shape().isRequired,
  userFollowing: PropTypes.shape().isRequired,
  fetchArticles: PropTypes.func.isRequired,
  getFollowee: PropTypes.func.isRequired,
  getFollowing: PropTypes.func.isRequired,
};

export default Profilepage;
