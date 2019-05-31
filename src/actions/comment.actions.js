import exceptionHandler from '../utils/exceptionHandler';
import http from '../utils/httpService';
import actionTypes from '../constants/comment.constants';
import contentLoading from './loading.action';

export const postCommentSuccess = comment => ({
  type: actionTypes.POST_COMMENT_SUCCESS,
  comment,
});

export const postCommentFailure = () => ({
  type: actionTypes.POST_COMMENT_FAILURE,
});

export const editCommentSuccess = editResponse => ({
  type: actionTypes.EDIT_COMMENT_SUCCESS,
  editResponse,
});

export const editCommentFailure = () => ({
  type: actionTypes.EDIT_COMMENT_FAILURE,
});

export const commentHistorySuccess = histories => ({
  type: actionTypes.FETCH_COMMENT_HISTORY_SUCCESS,
  histories,
});

export const commentHistoryFailure = () => ({
  type: actionTypes.FETCH_COMMENT_HISTORY_FAILURE,
});

export const deleteCommentSuccess = commentId => ({
  type: actionTypes.DELETE_COMMENT_SUCCESS,
  commentId,
});

export const deleteCommentFailure = () => ({
  type: actionTypes.DELETE_COMMENT_FAILURE,
});

export const postComment = data => {
  return async dispatch => {
    try {
      const comment = await http.post('/comments', data);
      dispatch(postCommentSuccess(comment.data.comment));
    } catch (ex) {
      exceptionHandler(ex);
    } finally {
      dispatch(postCommentFailure());
    }
  };
};

export const updateComment = (data, commentId) => {
  return async dispatch => {
    try {
      const comment = await http.patch(`comments/${commentId}`, data);
      dispatch(editCommentSuccess(comment.data.editedComment[0]));
    } catch (ex) {
      exceptionHandler(ex);
    } finally {
      dispatch(editCommentFailure());
    }
  };
};

export const getCommentHistory = commentId => {
  return async dispatch => {
    dispatch(contentLoading());
    try {
      const history = await http.get(`comments/${commentId}/histories`);
      dispatch(commentHistorySuccess(history.data.comment));
    } catch (ex) {
      exceptionHandler(ex);
    } finally {
      dispatch(commentHistoryFailure());
    }
  };
};

export const deleteComment = commentId => {
  return async dispatch => {
    dispatch(contentLoading());
    try {
      await http.delete(`comments/${commentId}`);
      dispatch(deleteCommentSuccess(commentId));
    } catch (ex) {
      exceptionHandler(ex);
    } finally {
      dispatch(deleteCommentFailure());
    }
  };
};

export default {
  postComment,
  getCommentHistory,
  deleteComment,
};
