import React from 'react';
import PropTypes from 'prop-types';

const ProfileButton = ({ value, number, className, ...rest }) => {
  return (
    <div className={className}>
      <button type="button" {...rest}>
        <span className="text">{value}</span>
      </button>
      {number ? <span className="num-icon">{number}</span> : null}
    </div>
  );
};

ProfileButton.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  number: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

ProfileButton.defaultProps = {
  number: null,
};

export default ProfileButton;
