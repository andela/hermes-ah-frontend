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
import Following from '../UserFollowing/Following/Following';
import Followee from '../UserFollowing/Followee/Followee';
import Bookmarked from '../Bookmarked/Bookmaked';
import NavBar from '../../shared/NavBar/NavBar';
import http from '../../../utils/httpService';
import Modal from '../../shared/Modals/Modal';

class Profilepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'profile-section',
      modalOpen: false,
      modalProfile: {},
      open: false,
      size: '',
      articleid: '',
    };
  }

  componentDidMount = () => {
    const {
      fetchArticles,
      getFollowee,
      getFollowing,
      fetchBookmarks,
      getSuggestions,
      getProfile,
    } = this.props;

    getProfile();
    getSuggestions();
    fetchArticles();
    getFollowee();
    getFollowing();
    fetchBookmarks();
  };

  unFollowClick = async e => {
    const { unFollowUser, userFollowing } = this.props;
    const { followingCount } = userFollowing;
    const newcount = parseInt(followingCount, 10) - 1;
    await unFollowUser(e.target.id, newcount);
  };

  followClick = async e => {
    const { followUser, userFollowing } = this.props;
    const { followingCount } = userFollowing;
    const newcount = parseInt(followingCount, 10) + 1;
    followUser(e.target.id, newcount);
  };

  deleteArticleClick = async e => {
    const { deleteArticle } = this.props;
    await deleteArticle(e.target.id);
    this.closeConfirmationModal();
  };

  changeTab = tab => {
    this.setState({ currentTab: tab });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  openModal = async userid => {
    const { data } = await http.get(`/profile/${userid}`);
    this.setState({ modalOpen: true, modalProfile: data });
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
      updateProfile({ image_url: res.url });
      toast.dismiss();
    } else {
      toast.error(validFormat.message);
    }
  };

  showConfirmationModal = (size, articleid) =>
    this.setState({ size, open: true, articleid });

  closeConfirmationModal = () => this.setState({ open: false });

  render() {
    const {
      currentTab,
      modalOpen,
      modalProfile,
      open,
      size,
      articleid,
    } = this.state;

    const {
      articlesUpdate,
      userFollowee,
      userFollowing,
      isLoadingReducer,
      bookmarkedArticles,
      updateProfile,
      user,
      getAnArticle,
      getFollowing,
    } = this.props;
    const { followingCount } = userFollowing;
    const { userProfile } = user;
    const { profile } = userProfile;
    const { loader } = isLoadingReducer;
    const { articles } = articlesUpdate;
    const bookmarkList = bookmarkedArticles.articles;
    const { profile: profileData } = modalProfile;
    return (
      <React.Fragment>
        <NavBar />
        {loader && <Loader />}
        <div className="profile-header">
          <Imagepic
            profilePic={profile && profile.image_url}
            handleChange={this.handleChange}
            updateProfile={updateProfile}
          />
          <h1>
            {profile && profile.first_name}
            &nbsp;
            {profile && profile.last_name}
          </h1>
        </div>
        <ProfileTab
          changeTab={this.changeTab}
          currentTab={currentTab}
          totalArticle={`${articles.length}`}
          totalFollowee={`${userFollowee.userFollowee.length}`}
          totalFollowing={`${followingCount}`}
          totalBookmarkArticle={`${bookmarkList.length}`}
        />
        <div className="profile-content">
          {currentTab === 'following-section' ? (
            <Following
              userFollowing={userFollowing}
              getFollowing={getFollowing}
              unFollow={this.unFollowClick}
              openModal={this.openModal}
            />
          ) : null}
          {currentTab === 'followers-section' ? (
            <Followee
              userFollowee={userFollowee}
              follow={this.followClick}
              openModal={this.openModal}
            />
          ) : null}
          {currentTab === 'article-section' ? (
            <div>
              <Articles
                articlesUpdate={articlesUpdate}
                editAnArticle={getAnArticle}
                deleteArticle={this.deleteArticleClick}
                size={size}
                articleid={articleid}
                open={open}
                showConfirmationModal={this.showConfirmationModal}
                closeConfirmationModal={this.closeConfirmationModal}
              />
            </div>
          ) : null}
          {currentTab === 'bookmark-section' ? (
            <div>
              <Bookmarked bookmarkedArticles={bookmarkedArticles} />
            </div>
          ) : null}
          {currentTab === 'profile-section' ? (
            <Userprofile isReviewer={profile && profile.is_reviewer} />
          ) : null}
        </div>
        {profileData ? (
          <Modal
            modalOpen={modalOpen}
            closeModal={this.closeModal}
            title={`${modalProfile.profile.first_name} 
            ${modalProfile.profile.last_name}`}
          >
            <div className="profile-modal-grid">
              <div className="image-container">
                <img alt="user" src={modalProfile.profile.image_url} />
              </div>
              <div className="mod">
                <p>
                  <span>Title:</span>
                  &nbsp;
                  {modalProfile.profile.title}
                </p>
                <p>
                  <span>Research Field:</span>
                  &nbsp;
                  {modalProfile.profile.research_field}
                </p>
                <p>
                  <span>Email:</span>
                  &nbsp;
                  {modalProfile.profile.email}
                </p>
                <p>
                  <span>Phone:</span>
                  &nbsp;
                  {modalProfile.profile.phone_number}
                </p>
                <p>
                  <span>Bio:</span>
                  &nbsp;
                  {modalProfile.profile.bio}
                </p>
              </div>
            </div>
          </Modal>
        ) : null}
      </React.Fragment>
    );
  }
}

Profilepage.propTypes = {
  user: PropTypes.shape({
    userProfile: PropTypes.shape(),
  }).isRequired,
  isLoadingReducer: PropTypes.shape({
    loader: PropTypes.bool,
  }).isRequired,
  articlesUpdate: PropTypes.shape({
    articles: PropTypes.array,
  }).isRequired,
  getProfile: PropTypes.func.isRequired,
  unFollowUser: PropTypes.func.isRequired,
  followUser: PropTypes.func.isRequired,
  userFollowee: PropTypes.shape().isRequired,
  userFollowing: PropTypes.shape().isRequired,
  fetchArticles: PropTypes.func.isRequired,
  getFollowee: PropTypes.func.isRequired,
  getFollowing: PropTypes.func.isRequired,
  bookmarkedArticles: PropTypes.shape().isRequired,
  fetchBookmarks: PropTypes.func.isRequired,
  updateProfile: PropTypes.func.isRequired,
  getSuggestions: PropTypes.func.isRequired,
  getAnArticle: PropTypes.func.isRequired,
  deleteArticle: PropTypes.func.isRequired,
};

export default Profilepage;
