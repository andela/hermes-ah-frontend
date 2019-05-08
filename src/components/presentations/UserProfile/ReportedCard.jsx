import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import './userprofile.scss';

const ReportedCard = ({ topic, reason, status }) => {
  return (
    <div className="report-profile-card">
      <p className="report-profile-card-item">
        <b>Topic:</b>
        <span>{topic}</span>
      </p>
      <p className="report-profile-card-item">
        <b>Reason:</b>
        <span>{reason}</span>
      </p>
      <p className="report-profile-card-item">
        <b>Status:</b>
        <span>{status}</span>
      </p>
      <Button>Review</Button>
    </div>
  );
};

ReportedCard.propTypes = {
  topic: PropTypes.string.isRequired,
  reason: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default ReportedCard;
