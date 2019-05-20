import React, { Component } from 'react';
import TimeAgo from 'react-timeago';
import CommentInput from './CommentInput';
import dummyData from '../../../utils/dummyData';

const { comment } = dummyData;
class CommentCard extends Component {
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
    return (
      <React.Fragment>
        <div className="comment-cont">
          <h3>Comments</h3>
          {/* write comment - texbox */}
          <CommentInput />
          <div>
            {/* comment */}
            {comment.map(comm => (
              <div className="comments-cont-text-content" key={comm.id}>
                <div className="wrap-image-author">
                  <div className="image-author">
                    <div className="commenter-img">
                      <img
                        src="https://res.cloudinary.com/mchardex/image/upload/v1557421338/animals_hero_antelope.jpg"
                        alt="author"
                      />
                    </div>
                    <div className="commenter-details">
                      <h3>Anayo Oleru</h3>
                      <span>{new Date(comm.createdAt).toDateString()}</span>
                    </div>
                  </div>
                  <i className="fas fa-ellipsis-v" />
                </div>
                <div className="commenter-text">
                  <p>{comm.body}</p>
                </div>
                <div className="commt-details">
                  <p className="last-upd">
                    <TimeAgo date={new Date(comm.createdAt).toUTCString()} />
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
                    {comm.replies.map(reply => (
                      <div className="response" key={reply.id}>
                        <div className="wrap-image-author">
                          <div className="image-author">
                            <div className="commenter-img">
                              <img
                                src="https://res.cloudinary.com/mchardex/image/upload/v1557421338/animals_hero_antelope.jpg"
                                alt="author"
                              />
                            </div>
                            <div className="commenter-details">
                              <h3>Anayo Oleru</h3>
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

export default CommentCard;
