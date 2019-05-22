import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputComment extends Component {
  handleCommentInput = e => {
    const { value } = e.target;
    this.setState({ commentVal: value.toLowerCase() });
  };

  postComment = e => {
    e.preventDefault();
    const { commentVal } = this.state;
    const data = {
      article_id: e.target.id,
      body: commentVal,
    };
    const { postComment: sendComment } = this.props;
    sendComment(data);
  };

  render() {
    const { articleId, imageUrl } = this.props;
    return (
      <div className="write-comment">
        <form
          className="comment-text-wrap"
          id={articleId}
          onSubmit={this.postComment}
        >
          <div className="wrap-img-text">
            <div className="image">
              <img src={imageUrl} alt="author" />
            </div>
            <textarea
              type="text"
              name="comment-text"
              placeholder="Write a comment..."
              className="text-area-comm"
              onChange={this.handleCommentInput}
            />
          </div>
          <button type="submit" className="submit-comment">
            Comment
          </button>
        </form>
      </div>
    );
  }
}

InputComment.defaultProps = {
  imageUrl: '',
  articleId: '',
};

InputComment.propTypes = {
  imageUrl: PropTypes.string,
  articleId: PropTypes.string,
  postComment: PropTypes.func.isRequired,
};
export default InputComment;
