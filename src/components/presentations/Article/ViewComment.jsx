import React, { Component } from 'react';
import TimeAgo from 'react-timeago';
import PropTypes from 'prop-types';
import InputComment from './InputComment';
import ViewEditHistoryModal from '../../shared/Modals/Modal';
import DeleteModal from '../../shared/Modals/DeleteModal';

class ViewComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      input: false,
      menu: false,
      showEdit: false,
      replyVal: '',
      showEditHistory: false,
      showDelete: false,
    };
  }

  toggleReplies = () => {
    const { toggle } = this.state;
    this.setState({ toggle: !toggle });
  };

  toggleCommentMenu = () => {
    const { menu } = this.state;
    this.setState({ menu: !menu });
  };

  showCommentInput = () => {
    const { input } = this.state;
    this.setState({ input: !input });
  };

  showEditComment = () => {
    const { showEdit } = this.state;
    this.setState({ showEdit: !showEdit, menu: false });
  };

  showDeleteModal = () => {
    this.setState({ showDelete: true });
  };

  closeDeleteModal = () => {
    this.setState({ showDelete: false, menu: false });
  };

  handleReplyInput = e => {
    const { value } = e.target;
    this.setState({ replyVal: value });
  };

  showEditHistoryModal = async e => {
    const { getCommentHistory } = this.props;
    const commentId = e.target.id;
    await getCommentHistory(commentId);
    this.setState({ showEditHistory: true, menu: false });
  };

  closeEditHistoryModal = () => {
    this.setState({ showEditHistory: false });
  };

  editComment = e => {
    e.preventDefault();
    const { replyVal } = this.state;
    const data = {
      body: replyVal,
    };
    const commentId = e.target.id;
    this.setState({ replyVal: '' });
    const { updateComment } = this.props;
    updateComment(data, commentId);
    this.showEditComment();
  };

  onEnterSubmitEdit = e => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      const { replyVal } = this.state;
      const data = {
        body: replyVal,
      };
      const commentId = e.target.id;
      this.setState({ replyVal: '' });
      const { updateComment } = this.props;
      updateComment(data, commentId);
      this.showEditComment();
    }
  };

  deleteUserComment = e => {
    const commentId = e.target.id;
    const { deleteComment } = this.props;
    deleteComment(commentId);
  };

  render() {
    const {
      toggle,
      input,
      menu,
      showEdit,
      replyVal,
      showEditHistory,
      showDelete,
    } = this.state;
    const { comment, commentHistory, profile, likeComment } = this.props;
    return (
      <React.Fragment>
        {comment ? (
          <div className="comment-cont">
            {showEdit ? (
              <InputComment
                imageUrl={comment && comment.commentOwner.image_url}
                id={comment && comment.id}
                btnValue="Update Comment"
                closeVal="Cancel"
                commentVal={replyVal}
                placeholderValue={comment && comment.body}
                handleClose={this.showEditComment}
                handleChange={this.handleReplyInput}
                submitForm={this.editComment}
                enterKeyFormSubmit={this.onEnterSubmitEdit}
              />
            ) : (
              <div>
                <div className="comments-cont-text-content">
                  <div className="wrap-image-author">
                    {comment.commentOwner && (
                      <div className="image-author">
                        <div className="commenter-img">
                          <img
                            src={
                              !comment.commentOwner.image_url
                                ? 'https://res.cloudinary.com/sojidan/image/upload/v1557149927/avatar.png'
                                : comment.commentOwner.image_url
                            }
                            alt="author"
                          />
                        </div>
                        <div className="commenter-details">
                          <h3>
                            {`${comment.commentOwner.first_name} ${
                              comment.commentOwner.last_name
                            }`}
                          </h3>
                          <span>
                            {new Date(comment.updatedAt).toDateString()}
                          </span>
                        </div>
                      </div>
                    )}
                    <div className="toggle-comment-menu">
                      {profile && profile.id === comment.user_id ? (
                        <button type="button" onClick={this.toggleCommentMenu}>
                          <i className="fas fa-ellipsis-v" />
                        </button>
                      ) : null}
                      {menu && (
                        <div className="comment-menu">
                          <button type="button" onClick={this.showEditComment}>
                            Edit comment
                          </button>
                          <button type="button" onClick={this.showDeleteModal}>
                            Delete Comment
                          </button>
                        </div>
                      )}
                      <DeleteModal
                        open={showDelete}
                        closeConfirmationModal={this.closeDeleteModal}
                        id={comment.id}
                        buttonEvent={this.deleteUserComment}
                      />
                    </div>
                  </div>
                  {commentHistory &&
                    commentHistory.map(history => (
                      <ViewEditHistoryModal
                        key={history.id}
                        modalOpen={showEditHistory}
                        closeModal={this.closeEditHistoryModal}
                        title="Edit History"
                      >
                        {/* histories */}
                        {history.histories.map(histories => (
                          <div className="history-body" key={histories.id}>
                            <img
                              alt="comment-owner"
                              src={profile && profile.image_url}
                            />
                            <div className="author-details-wrap">
                              <div className="author">
                                <p className="auth-name">
                                  {`${profile.first_name} ${profile.last_name}`}
                                </p>
                                <p className="comment">{histories.body}</p>
                              </div>
                              <div className="time">
                                <p>
                                  <TimeAgo
                                    date={new Date(
                                      histories.createdAt
                                    ).toUTCString()}
                                  />
                                </p>
                              </div>
                            </div>
                            {/* histories */}
                          </div>
                        ))}
                        <div className="history-body">
                          <img
                            alt="comment-owner"
                            src={profile && profile.image_url}
                          />
                          <div className="author-details-wrap">
                            <div className="author">
                              <p className="auth-name">
                                {`${profile.first_name} ${profile.last_name}`}
                              </p>
                              <p className="comment">{history.body}</p>
                            </div>
                            <div className="time">
                              <p>
                                <TimeAgo
                                  date={new Date(
                                    history.updatedAt
                                  ).toUTCString()}
                                />
                              </p>
                            </div>
                          </div>
                        </div>
                      </ViewEditHistoryModal>
                    ))}
                  <div className="commenter-text">
                    <p>{comment.body}</p>
                  </div>
                  <div className="commt-details">
                    <p className="last-upd">
                      <TimeAgo
                        date={new Date(comment.createdAt).toUTCString()}
                      />
                    </p>
                    <span>.</span>
                    <button
                      type="button"
                      className="reply"
                      onClick={this.showCommentInput}
                    >
                      Reply
                    </button>
                    <div className="like-comment">
                      <button
                        type="button"
                        onClick={() => likeComment(comment.id)}
                      >
                        <i className="far fa-thumbs-up" />
                      </button>
                      <span>{comment.likes_count}</span>
                    </div>
                    {profile.id === comment.user_id &&
                    new Date(comment.updatedAt).toUTCString() >
                      new Date(comment.createdAt).toUTCString() ? (
                      // eslint-disable-next-line react/jsx-indent
                      <div>
                        <span>.</span>
                        <span
                          className="edited-comm"
                          id={comment && comment.id}
                          onClick={this.showEditHistoryModal}
                          onKeyDown={this.showEditHistoryModal}
                          role="presentation"
                        >
                          Edited
                        </span>
                      </div>
                    ) : null}
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
                                <img
                                  src={reply.replier.image_url}
                                  alt="author"
                                />
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
            )}
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

ViewComment.defaultProps = {
  profile: {},
  commentHistory: [{}],
};

ViewComment.propTypes = {
  comment: PropTypes.shape().isRequired,
  profile: PropTypes.shape(),
  commentHistory: PropTypes.arrayOf(PropTypes.shape()),
  updateComment: PropTypes.func.isRequired,
  getCommentHistory: PropTypes.func.isRequired,
  likeComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

export default ViewComment;
