import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProfileButton from './ProfileTabButton';
import './profiletab.scss';

class ProfileTab extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      changeTab,
      currentTab,
      totalArticle,
      totalFollowee,
      totalFollowing,
      totalBookmarkArticle,
    } = this.props;
    const ProfileTabItems = [
      {
        id: 1,
        value: 'Following',
        valueNum: totalFollowing,
        section: 'following-section',
      },
      {
        id: 2,
        value: 'Followers',
        valueNum: totalFollowee,
        section: 'followers-section',
      },
      {
        id: 3,
        value: 'Articles',
        valueNum: totalArticle,
        section: 'article-section',
      },
      {
        id: 4,
        value: 'Bookmarked',
        valueNum: totalBookmarkArticle,
        section: 'bookmark-section',
      },
    ];
    return (
      <React.Fragment>
        <div className="profile-tab">
          <div className="profile-tab-items-left">
            {ProfileTabItems.map(tab => {
              return (
                <ProfileButton
                  key={tab.id}
                  value={tab.value}
                  className={
                    currentTab === tab.section
                      ? 'profile-btn-active'
                      : 'profile-btn'
                  }
                  onClick={() => changeTab(tab.section)}
                  number={tab.valueNum}
                />
              );
            })}
          </div>
          <div className="profile-tab-items-right">
            <ProfileButton
              value="My Profile"
              className={
                currentTab === 'profile-section'
                  ? 'profile-btn-active'
                  : 'profile-btn'
              }
              onClick={() => changeTab('profile-section')}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

ProfileTab.propTypes = {
  changeTab: PropTypes.func.isRequired,
  currentTab: PropTypes.string.isRequired,
  totalArticle: PropTypes.string.isRequired,
  totalFollowee: PropTypes.string.isRequired,
  totalFollowing: PropTypes.string.isRequired,
  totalBookmarkArticle: PropTypes.string.isRequired,
};

export default ProfileTab;
