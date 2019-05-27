import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import './userprofile.scss';

const ReportedCard = ({ topic, reason, status, openReview, title }) => {
  return (
    <div className="report-profile-card">
      <p className="report-profile-card-item">
        <b>Title of article:</b>
        <span>{title}</span>
      </p>
      <p className="report-profile-card-item">
        <b>Topic of report:</b>
        <span>{topic}</span>
      </p>
      <p className="report-profile-card-item">
        <b>Reason:</b>
        <span>{reason}</span>
      </p>
      <p className="report-profile-card-item">
        <b>Status of report:</b>
        <span>{status}</span>
      </p>
      <Button onClick={openReview}>Review</Button>
    </div>
  );
};

ReportedCard.propTypes = {
  topic: PropTypes.string.isRequired,
  reason: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  openReview: PropTypes.func.isRequired,
};

export default ReportedCard;
