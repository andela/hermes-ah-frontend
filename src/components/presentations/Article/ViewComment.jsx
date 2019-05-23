import React, { Component } from 'react';
import TimeAgo from 'react-timeago';
import PropTypes from 'prop-types';
import InputComment from './InputComment';

class ViewComment extends Component {
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
    const { comment } = this.props;
    return (
      <React.Fragment>
        {comment ? (
          <div className="comment-cont">
            <div className="comments-cont-text-content">
              <div className="wrap-image-author">
                {comment.commentOwner && (
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
                )}
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
              {input ? <InputComment /> : null}
              {comment.replies && comment.replies.length > 0 ? (
                <div className="hide-replies">
                  <hr className="line" />
                  <button type="button" onClick={this.toggleReplies}>
                    {toggle ? 'Hide replies' : 'Show replies'}
                  </button>
                </div>
              ) : null}
              {toggle ? (
                <div>
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
          </div>
        ) : (
          <p>Loading</p>
        )}
      </React.Fragment>
    );
  }
}

ViewComment.propTypes = {
  comment: PropTypes.shape().isRequired,
};

export default ViewComment;
