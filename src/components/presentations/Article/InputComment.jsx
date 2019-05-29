import React from 'react';
import PropTypes from 'prop-types';

const InputComment = ({
  articleId,
  commentVal,
  imageUrl,
  btnValue,
  submitForm,
  handleChange,
  enterKeyFormSubmit,
  handleClose,
  closeVal,
}) => {
  return (
    <div className="write-comment edit-comment-margin" key={articleId}>
      <form className="comment-text-wrap" id={articleId} onSubmit={submitForm}>
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
            type="text"
            name="comment-text"
            placeholder="Write a comment..."
            className="text-area-comm"
            onKeyDown={enterKeyFormSubmit}
            onChange={handleChange}
            value={commentVal}
          />
        </div>
        <div className="sub-form-cont">
          <button type="button" className="close" onClick={handleClose}>
            {closeVal}
          </button>
          <button type="submit" className="submit-comment">
            {btnValue}
          </button>
        </div>
      </form>
    </div>
  );
};

InputComment.defaultProps = {
  imageUrl:
    'https://res.cloudinary.com/sojidan/image/upload/v1557149927/avatar.png',
  articleId: '',
  closeVal: '',
  handleClose: PropTypes.func,
  enterKeyFormSubmit: PropTypes.func,
};

InputComment.propTypes = {
  imageUrl: PropTypes.string,
  closeVal: PropTypes.string,
  articleId: PropTypes.string,
  btnValue: PropTypes.string.isRequired,
  submitForm: PropTypes.func.isRequired,
  commentVal: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  enterKeyFormSubmit: PropTypes.func,
  handleClose: PropTypes.func,
};

export default InputComment;
