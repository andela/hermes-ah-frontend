import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentVal: '',
    };
  }

  handleCommentInput = e => {
    const { value } = e.target;
    this.setState({ commentVal: value.toLowerCase() });
  };

  sendComment = e => {
    e.preventDefault();
    const { commentVal } = this.state;
    const data = {
      article_id: e.target.id,
      body: commentVal,
    };
    const { postComment } = this.props;
    postComment(data);
    this.setState({ commentVal: '' });
  };

  onEnterSubmit = e => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      const { commentVal } = this.state;
      const { articleId } = this.props;
      const data = {
        article_id: articleId,
        body: commentVal,
      };
      const { postComment } = this.props;
      postComment(data);
      this.setState({ commentVal: '' });
    }
  };

  render() {
    const { articleId, imageUrl } = this.props;
    const { commentVal } = this.state;
    return (
      <div className="write-comment" key={articleId}>
        <form
          className="comment-text-wrap"
          id={articleId}
          onSubmit={this.sendComment}
        >
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
              value={commentVal}
              name="comment-text"
              placeholder="Write a comment..."
              className="text-area-comm"
              onKeyDown={this.onEnterSubmit}
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
  imageUrl:
    'https://res.cloudinary.com/sojidan/image/upload/v1557149927/avatar.png',
  articleId: '',
};

InputComment.propTypes = {
  imageUrl: PropTypes.string,
  articleId: PropTypes.string,
  postComment: PropTypes.func.isRequired,
};
export default InputComment;
