import React from 'react';
import PropTypes from 'prop-types';
import ReviewerRequestCard from '../ReviewersCard/Reviewers-card';
import '../ReviewersCard/reviewers-card.scss';

const RequestList = props => {
  const { userRequests, adminAcceptRequest, adminRejectRequest } = props;
  return (
    <div>
      <div className="main_page_title">
        <div className="main-grid">
          {userRequests.map(user => (
            <ReviewerRequestCard
              key={user.user_id}
              imageUrl={user.User.image_url}
              initials={`${user.User.first_name
                .charAt(0)
                .toUpperCase()}${user.User.last_name.charAt(0).toUpperCase()}`}
              name={`${user.User.first_name} ${user.User.last_name}`}
              bio={user.User.bio}
              button="Accept"
              adminAcceptRequest={() => adminAcceptRequest(user.user_id)}
              adminRejectRequest={() => adminRejectRequest(user.user_id)}
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

RequestList.defaultProps = {
  userRequests: [],
};

RequestList.propTypes = {
  userRequests: PropTypes.arrayOf(PropTypes.shape()),
  adminAcceptRequest: PropTypes.func.isRequired,
  adminRejectRequest: PropTypes.func.isRequired,
};

export default RequestList;
