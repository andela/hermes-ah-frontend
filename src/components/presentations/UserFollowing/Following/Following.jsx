import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FollowingCard from '../FollowCard/Follow-card';
import '../FollowCard/follow-card.scss';

class FollowingList extends Component {
  componentDidMount = () => {
    const { getFollowing } = this.props;
    getFollowing();
  };

  render() {
    const { userFollowing, unFollow, openModal } = this.props;
    const { userFollowing: following } = userFollowing;
    return (
      <div className="grid-render">
        {following.map(user => (
          <FollowingCard
            key={user.id}
            imageUrl={user.followee.image_url}
            initials={`${user.followee.first_name
              .charAt(0)
              .toUpperCase()}${user.followee.last_name
              .charAt(0)
              .toUpperCase()}`}
            name={`${user.followee.first_name} ${user.followee.last_name}`}
            bio={`${user.followee.bio.substring(0, 100)}...`}
            id={user.followee_id}
            button="unfollow"
            btnClass="btn-following"
            buttonEvent={unFollow}
            openModal={() => openModal(user.followee_id)}
          />
        ))}
      </div>
    );
  }
}

FollowingList.propTypes = {
  userFollowing: PropTypes.shape({
    userFollowing: PropTypes.array,
  }).isRequired,
  unFollow: PropTypes.func.isRequired,
  getFollowing: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default FollowingList;
