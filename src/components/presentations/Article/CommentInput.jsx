import React from 'react';

const CommentInput = () => {
  return (
    <div className="write-comment">
      <form className="comment-text-wrap">
        <div className="wrap-img-text">
          <div className="image">
            <img
              src="https://res.cloudinary.com/mchardex/image/upload/v1523618086/bukunmi.jpg"
              alt="author"
            />
          </div>
          <textarea
            type="text"
            name="comment-text"
            placeholder="Write a comment..."
            className="text-area-comm"
          />
        </div>
        <button type="submit" className="submit-comment">
          Comment
        </button>
      </form>
    </div>
  );
};

export default CommentInput;
