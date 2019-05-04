import React from 'react';
import PropTypes from 'prop-types';

const ProfileButton = ({ value, number, className, ...rest }) => {
  return (
    <button type="button" className={className} {...rest}>
      <span className="text">{value}</span>
      {number ? <span className="num-icon">{number}</span> : null}
    </button>
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
