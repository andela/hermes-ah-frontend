import React from 'react';
import PropTypes from 'prop-types';
import FollowingCard from '../FollowCard/Follow-card';
import '../FollowCard/follow-card.scss';

const FollowingList = ({ userFollowing, unFollow }) => {
  const { userFollowing: following } = userFollowing;
  return (
    <div className="grid-render">
      {following.map(user => (
        <FollowingCard
          key={user.id}
          imageUrl={user.followee.image_url}
          initials={`${user.followee.first_name
            .charAt(0)
            .toUpperCase()}${user.followee.last_name.charAt(0).toUpperCase()}`}
          name={`${user.followee.first_name} ${user.followee.last_name}`}
          bio={`${user.followee.bio.substring(0, 100)}...`}
          Id={user.followee_id}
          button="unfollow"
          btnClass="btn-following"
          buttonEvent={unFollow}
        />
      ))}
    </div>
  );
};

FollowingList.propTypes = {
  userFollowing: PropTypes.shape({
    userFollowing: PropTypes.array,
  }).isRequired,
  unFollow: PropTypes.func.isRequired,
};

export default FollowingList;
