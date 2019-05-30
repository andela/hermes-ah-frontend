import React from 'react';
import PropTypes from 'prop-types';

const InputComment = ({
  id,
  commentVal,
  imageUrl,
  btnValue,
  submitForm,
  handleChange,
  enterKeyFormSubmit,
  handleClose,
  closeVal,
  placeholderValue,
}) => {
  return (
    <div className="write-comment edit-comment-margin" key={id}>
      <form className="comment-text-wrap" id={id} onSubmit={submitForm}>
        <div className="wrap-img-text">
          <div className="image">
            <img
              src={
                !imageUrl
                  ? 'https://res.cloudinary.com/sojidan/image/upload/v1557149927/avatar.png'
                  : imageUrl
              }
              alt="author"
            />
          </div>
          <textarea
            required
            type="text"
            id={id}
            name="comment-text"
            placeholder={placeholderValue}
            className="text-area-comm"
            onKeyDown={enterKeyFormSubmit}
            onChange={handleChange}
            value={commentVal}
          />
        </div>
        <div className="sub-form-cont">
          <button type="submit" className="submit-comment">
            {btnValue}
          </button>
          <button type="button" className="close" onClick={handleClose}>
            {closeVal}
          </button>
        </div>
        <div className="wrap-guide">
          <div className="input-guide">
            <span>Press </span>
            <img
              src="https://res.cloudinary.com/mchardex/image/upload/v1559145799/keyboard-key-shift-512.png"
              alt="shift"
            />
            <span> + </span>
            <img
              src="https://res.cloudinary.com/mchardex/image/upload/v1559145991/keyboard-key-enter-512.png"
              alt="enter"
            />
            <span>to move to next line</span>
          </div>
          <span className="space">|</span>
          <div className="input-guide-enter">
            <span>Press </span>
            <img
              src="https://res.cloudinary.com/mchardex/image/upload/v1559145991/keyboard-key-enter-512.png"
              alt="enter"
            />
            <span>to submit</span>
          </div>
        </div>
      </form>
    </div>
  );
};

InputComment.defaultProps = {
  imageUrl:
    'https://res.cloudinary.com/sojidan/image/upload/v1557149927/avatar.png',
  id: '',
  commentVal: '',
  closeVal: '',
  placeholderValue: '',
  btnValue: '',
  handleClose: () => {},
  submitForm: () => {},
  enterKeyFormSubmit: () => {},
  handleChange: () => {},
};

InputComment.propTypes = {
  imageUrl: PropTypes.string,
  closeVal: PropTypes.string,
  id: PropTypes.string,
  btnValue: PropTypes.string,
  placeholderValue: PropTypes.string,
  submitForm: PropTypes.func,
  commentVal: PropTypes.string,
  handleChange: PropTypes.func,
  enterKeyFormSubmit: PropTypes.func,
  handleClose: PropTypes.func,
};

export default InputComment;
