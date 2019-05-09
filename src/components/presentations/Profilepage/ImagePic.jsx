import React from 'react';
import PropTypes from 'prop-types';

const Imagepic = ({ handleChange, profilePic }) => (
  <div className="profile-img-container">
    <img
      src={
        !profilePic
          ? 'https://res.cloudinary.com/sojidan/image/upload/v1557149927/avatar.png'
          : profilePic
      }
      alt="avatar"
    />
    <form className="custom-file-upload" encType="multipart/form-data">
      <label htmlFor="file-upload">
        <i className="fa fa-upload" />
        <input
          type="file"
          id="file-upload"
          name="file"
          onChange={e => {
            handleChange(e);
          }}
          accept="image/*"
        />
      </label>
    </form>
  </div>
);

Imagepic.defaultProps = {
  profilePic:
    'https://res.cloudinary.com/sojidan/image/upload/v1557149927/avatar.png',
};

Imagepic.propTypes = {
  profilePic: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

export default Imagepic;
