import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FollowingCard from '../FollowCard/Follow-card';
import UserProfileModal from '../../../shared/Modals/UserProfileModal';
import '../FollowCard/follow-card.scss';

class FollowingList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    const { getFollowing } = this.props;
    getFollowing();
  };

  render() {
    const { userFollowing, unFollow, modal } = this.props;
    const { userFollowing: following } = userFollowing;
    return (
      <div className="grid-render">
        <UserProfileModal modal={modal} />
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
            Id={user.followee_id}
            button="unfollow"
            btnClass="btn-following"
            buttonEvent={unFollow}
            openModal={() => modal.openModal(user.followee_id)}
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
  modal: PropTypes.shape().isRequired,
};

export default FollowingList;
