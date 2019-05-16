import React from 'react';
import PropTypes from 'prop-types';
import FollowCard from '../UserFollwing/FollowCard/Follow-card';

const SuggestedResearchers = ({ suggestedResearchers }) => (
  <div className="profile-img-container">
    {suggestedResearchers.length ? (
      suggestedResearchers
        .slice(0, 3)
        .map(item => (
          <FollowCard
            key={item.profile.id}
            imageUrl={item.profile.image_url}
            initials={`${item.profile.first_name
              .charAt(0)
              .toUpperCase()}${item.profile.last_name.charAt(0).toUpperCase()}`}
            bio={item.profile.bio}
            button="Follow"
            btnClass="btn-following"
            name={`${item.profile.first_name} ${item.profile.last_name}`}
          />
        ))
    ) : (
      <p>You have no suggestions</p>
    )}
  </div>
);

SuggestedResearchers.propTypes = {
  suggestedResearchers: PropTypes.arrayOf(Object).isRequired,
};

export default SuggestedResearchers;
