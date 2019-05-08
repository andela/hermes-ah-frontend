import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProfileTab from '../ProfileTab/ProfileTab';
import uploadToCloudnary from '../../../utils/uploadToCloudnary';
import Userprofile from '../../containers/userprofile.container';
import Loader from '../../shared/Loader/Loader';
import Imagepic from './ImagePic';
import './profilepage.scss';
import Articles from '../UserArticles/Articles';

class Profilepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'following-section',
      firstname: '',
      lastname: '',
      profilePic:
        'https://res.cloudinary.com/sojidan/image/upload/v1557149927/avatar.png',
      isReviewer: false,
    };
  }

  componentDidMount = () => {
    const { getProfile, fetchArticles } = this.props;
    getProfile();
    fetchArticles();
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
        isReviewer: profile.is_reviewer,
      });
    }
  };

  changeTab = tab => {
    this.setState({ currentTab: tab });
  };

  handleChange = async e => {
    const form = new FormData();
    const imageData = e.target.files[0];
    form.append('file', imageData);
    const res = await uploadToCloudnary(form);
    this.setState({ profilePic: res.url });
  };

  render() {
    const {
      currentTab,
      firstname,
      lastname,
      profilePic,
      isReviewer,
    } = this.state;
    const { isLoadingReducer, articlesUpdate } = this.props;
    const { loader } = isLoadingReducer;
    const { articles } = articlesUpdate;
    return (
      <React.Fragment>
        {loader && <Loader />}
        <div className="profile-header">
          <Imagepic profilePic={profilePic} handleChange={this.handleChange} />
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
            <div>This is the following section</div>
          ) : null}
          {currentTab === 'followers-section' ? (
            <div>This is the follower section</div>
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
            <Userprofile isReviewer={isReviewer} />
          ) : null}
        </div>
      </React.Fragment>
    );
  }
}

Profilepage.propTypes = {
  getProfile: PropTypes.func.isRequired,
  userProfile: PropTypes.shape().isRequired,
  isLoadingReducer: PropTypes.shape().isRequired,
  articlesUpdate: PropTypes.shape().isRequired,
  fetchArticles: PropTypes.func.isRequired,
};

export default Profilepage;
