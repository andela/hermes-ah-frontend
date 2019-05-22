import React from 'react';
import PropTypes from 'prop-types';
import './headercard.scss';

const Headercard = ({ icon, value, clickFunc, pointer }) => {
  return (
    <button
      type="button"
      className={`header-card ${pointer}`}
      onClick={() => clickFunc()}
    >
      <div className="header-card-icon">
        <i className={icon} />
      </div>
      <div className="header-card-title">{value}</div>
    </button>
  );
};

Headercard.defaultProps = {
  clickFunc: () => 'clicked',
};

Headercard.propTypes = {
  icon: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  pointer: PropTypes.string.isRequired,
  clickFunc: PropTypes.func,
};

export default Headercard;
