import React from 'react';
import PropTypes from 'prop-types';
import FollowingCard from '../FollowCard/Follow-card';

const FollowingList = ({ userFollowing }) => {
  const { userFollowing: following } = userFollowing;
  return following.map(user => (
    <FollowingCard
      key={user.id}
      initials="JD"
      name={`${user.followee.first_name} ${user.followee.last_name}`}
      bio={`${user.followee.bio}`}
      button="following"
    />
  ));
};

FollowingList.propTypes = {
  userFollowing: PropTypes.shape().isRequired,
};

export default FollowingList;
