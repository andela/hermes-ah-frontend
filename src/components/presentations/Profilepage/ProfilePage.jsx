import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import ProfileTab from '../ProfileTab/ProfileTab';
import uploadToCloudnary from '../../../utils/uploadToCloudnary';
import validateImage from '../../../utils/validateImage';
import Userprofile from '../../containers/userprofile.container';
import Loader from '../../shared/Loader/Loader';
import Imagepic from './ImagePic';
import './profilepage.scss';
import Articles from '../UserArticles/Articles';
import Following from '../UserFollwing/Following/Following';
import Followee from '../UserFollwing/Followee/Followee';
import Bookmarked from '../Bookmarked/Bookmaked';

class Profilepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'profile-section',
      firstname: '',
      lastname: '',
      profilePic:
        'https://res.cloudinary.com/sojidan/image/upload/v1557149927/avatar.png',
      isReviewer: false,
    };
  }

  componentDidMount = () => {
    const {
      getProfile,
      fetchArticles,
      getFollowee,
      getFollowing,
      fetchBookmarks,
    } = this.props;
    getProfile();
    fetchArticles();
    getFollowee();
    getFollowing();
    getProfile();
    fetchArticles();
    fetchBookmarks();
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
    const { updateProfile } = this.props;
    const form = new FormData();
    const imageData = e.target.files[0];
    const validFormat = validateImage(imageData);
    if (validFormat.valid) {
      toast.info(validFormat.message, {
        type: toast.TYPE.INFO,
        closeButton: false,
        position: toast.POSITION.TOP_CENTER,
      });
      form.append('file', imageData);
      const res = await uploadToCloudnary(form);
      this.setState({ profilePic: res.url });
      updateProfile({ image_url: res.url });
      toast.dismiss();
      toast.info('You have successfully update your profile.', {
        type: toast.TYPE.INFO,
        closeButton: false,
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      toast.error(validFormat.message);
    }
  };

  render() {
    const {
      currentTab,
      firstname,
      lastname,
      profilePic,
      isReviewer,
    } = this.state;

    const {
      articlesUpdate,
      userFollowee,
      userFollowing,
      isLoadingReducer,
      bookmarkedArticles,
      updateProfile,
    } = this.props;
    const { loader } = isLoadingReducer;
    const { articles } = articlesUpdate;
    const bookmarkList = bookmarkedArticles.articles;
    return (
      <React.Fragment>
        {loader && <Loader />}
        <div className="profile-header">
          <Imagepic
            profilePic={profilePic}
            handleChange={this.handleChange}
            updateProfile={updateProfile}
          />
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
          totalFollowee={`${userFollowee.userFollowee.length}`}
          totalFollowing={`${userFollowing.userFollowing.length}`}
          totalBookmarkArticle={`${bookmarkList.length}`}
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
            <div>
              <Bookmarked bookmarkedArticles={bookmarkedArticles} />
            </div>
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
  userFollowee: PropTypes.shape().isRequired,
  userFollowing: PropTypes.shape().isRequired,
  fetchArticles: PropTypes.func.isRequired,
  getFollowee: PropTypes.func.isRequired,
  getFollowing: PropTypes.func.isRequired,
  bookmarkedArticles: PropTypes.shape().isRequired,
  fetchBookmarks: PropTypes.func.isRequired,
  updateProfile: PropTypes.func.isRequired,
};

export default Profilepage;
