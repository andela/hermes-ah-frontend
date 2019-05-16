import React from 'react';
import PropTypes from 'prop-types';
import ReviewerRequests from '../ReviewersCard/Reviewers-card';
import '../ReviewersCard/reviewers-card.scss';

const RequestList = ({ userRequests }) => {
  const { userRequests: allUsersRequest } = userRequests;
  // const { bio } = this.props;
  return (
    <div>
      <p className="Reviewers_title">Reviewer Requests</p>
      <div className="main_page_title">
        <div className="main-grid">
          {allUsersRequest.length &&
            allUsersRequest.map(user => (
              <ReviewerRequests
                key={user.user_id}
                imageUrl={user.User.image_url}
                initials={`${user.User.first_name
                  .charAt(0)
                  .toUpperCase()}${user.User.last_name
                  .charAt(0)
                  .toUpperCase()}`}
                name={`${user.User.first_name} ${user.User.last_name}`}
                bio={user.User.bio}
                button="Accept"
                button1="reject"
                btnClass="btn-accept"
                btnClass1="btn-reject"
              />
            ))}
        </div>
      </div>
    </div>
  );
};

RequestList.propTypes = {
  userRequests: PropTypes.shape().isRequired,
};

export default RequestList;
