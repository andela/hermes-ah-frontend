import React from 'react';
import PropTypes from 'prop-types';

const ProfileButton = ({ value, number, className, ...rest }) => {
  return (
    <div className={className}>
      <button type="button" {...rest}>
        {value}
      </button>
      {number ? (
        <div className="num-icon">
          <p>{number}</p>
        </div>
      ) : null}
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
