import React from 'react';
import PropTypes from 'prop-types';
import FollowingCard from '../FollowCard/Follow-card';
import '../FollowCard/follow-card.scss';

const FolloweeList = ({ userFollowee, follow, openModal }) => {
  const { userFollowee: followee } = userFollowee;
  return (
    <div className="grid-render">
      {followee.map(user => (
        <FollowingCard
          key={user.id}
          imageUrl={user.follower.image_url}
          initials={`${user.follower.first_name
            .charAt(0)
            .toUpperCase()}${user.follower.last_name.charAt(0).toUpperCase()}`}
          name={`${user.follower.first_name} ${user.follower.last_name}`}
          bio={`${user.follower.bio.substring(0, 100)}...`}
          id={user.follower_id}
          button="follow"
          btnClass="btn-follower"
          buttonEvent={follow}
          openModal={() => openModal(user.follower_id)}
        />
      ))}
    </div>
  );
};

FolloweeList.propTypes = {
  userFollowee: PropTypes.shape({
    userFollowee: PropTypes.array,
  }).isRequired,
  follow: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default FolloweeList;
