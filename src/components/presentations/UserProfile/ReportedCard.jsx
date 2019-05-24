import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import './userprofile.scss';

const ReportedCard = ({ topic, reason, status, articleId }) => {
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
      <div>
        <Button>Review</Button>
        <Link to={`/article/${articleId}`}>
          <Button>View Article</Button>
        </Link>
      </div>
    </div>
  );
};

ReportedCard.defaultProps = {
  articleId: '',
};

ReportedCard.propTypes = {
  topic: PropTypes.string.isRequired,
  reason: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  articleId: PropTypes.string,
};

export default ReportedCard;
