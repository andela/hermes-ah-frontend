import React, { Component } from 'react';
import TimeAgo from 'react-timeago';
import PropTypes from 'prop-types';
import CommentInput from './CommentInput';

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      input: false,
    };
  }

  toggleReplies = () => {
    const { toggle } = this.state;
    this.setState({ toggle: !toggle });
  };

  showCommentInput = () => {
    const { input } = this.state;
    this.setState({ input: !input });
  };

  render() {
    const { toggle, input } = this.state;
    const { comments } = this.props;
    return (
      <React.Fragment>
        <div className="comment-cont">
          <h3>Comments</h3>
          {/* write comment - texbox */}
          <CommentInput />
          <div>
            {/* comment */}
            {comments.map(comment => (
              <div className="comments-cont-text-content" key={comment.id}>
                <div className="wrap-image-author">
                  <div className="image-author">
                    <div className="commenter-img">
                      <img src={comment.commentOwner.image_url} alt="author" />
                    </div>
                    <div className="commenter-details">
                      <h3>
                        {`${comment.commentOwner.first_name} ${
                          comment.commentOwner.last_name
                        }`}
                      </h3>
                      <span>{new Date(comment.createdAt).toDateString()}</span>
                    </div>
                  </div>
                  <i className="fas fa-ellipsis-v" />
                </div>
                <div className="commenter-text">
                  <p>{comment.body}</p>
                </div>
                <div className="commt-details">
                  <p className="last-upd">
                    <TimeAgo date={new Date(comment.createdAt).toUTCString()} />
                  </p>
                  <span>.</span>
                  <button
                    type="button"
                    className="reply"
                    onClick={this.showCommentInput}
                  >
                    Reply
                  </button>
                </div>
                {input ? <CommentInput /> : null}
                <div className="hide-replies">
                  <hr className="line" />
                  <button type="button" onClick={this.toggleReplies}>
                    {toggle ? 'Hide replies' : 'Show replies'}
                  </button>
                </div>
                {toggle ? (
                  <div>
                    {/* comment replies */}
                    {comment.replies.map(reply => (
                      <div className="response" key={reply.createdAt}>
                        <div className="wrap-image-author">
                          <div className="image-author">
                            <div className="commenter-img">
                              <img src={reply.replier.image_url} alt="author" />
                            </div>
                            <div className="commenter-details">
                              <h3>
                                {`${reply.replier.first_name} ${
                                  reply.replier.last_name
                                }`}
                              </h3>
                              <span>
                                {new Date(reply.createdAt).toDateString()}
                              </span>
                            </div>
                          </div>
                          <i className="fas fa-ellipsis-v" />
                        </div>
                        <div className="commenter-text">
                          <p>{reply.reply}</p>
                        </div>
                        <div className="commt-details">
                          <p className="last-upd">
                            {
                              <TimeAgo
                                date={new Date(reply.createdAt).toUTCString()}
                              />
                            }
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Comments.defaultProps = {
  comments: [],
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape()),
};

export default Comments;
