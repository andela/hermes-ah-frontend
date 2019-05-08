import React from 'react';
import PropTypes from 'prop-types';
import './headercard.scss';

const Headercard = ({ icon, value }) => {
  return (
    <div className="header-card">
      <div className="header-card-icon">
        <i className={icon} />
      </div>
      <div className="header-card-title">{value}</div>
    </div>
  );
};

Headercard.propTypes = {
  icon: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Headercard;
