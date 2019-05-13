import React from 'react';
import PropTypes from 'prop-types';

const AdminButton = ({ value, className, ...rest }) => {
  return (
    <div className={className}>
      <button type="button" {...rest}>
        <span className="text">{value}</span>
      </button>
    </div>
  );
};

AdminButton.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default AdminButton;
