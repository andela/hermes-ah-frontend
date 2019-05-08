import React from 'react';
import PropTypes from 'prop-types';
import FollowingCard from '../FollowCard/Follow-card';

const FolloweeList = ({ userFollowee }) => {
  const { userFollowee: followee } = userFollowee;
  return followee.map(user => (
    <FollowingCard
      key={user.id}
      initials="JD"
      name={`${user.follower.first_name} ${user.follower.last_name}`}
      bio={`${user.follower.bio}`}
      button="follow"
    />
  ));
};

FolloweeList.propTypes = {
  userFollowee: PropTypes.shape().isRequired,
};

export default FolloweeList;
