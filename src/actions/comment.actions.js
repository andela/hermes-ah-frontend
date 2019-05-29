import exceptionHandler from '../utils/exceptionHandler';
import http from '../utils/httpService';
import contentLoading from './loading.action';
import actionTypes from '../constants/comment.constants';

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

export const postComment = data => {
  return async dispatch => {
    dispatch(contentLoading());
    try {
      const comment = await http.post('/comments', data);
      dispatch(postCommentSuccess(comment.data.comment));
      return comment;
    } catch (ex) {
      return exceptionHandler(ex);
    } finally {
      dispatch(postCommentFailure());
    }
  };
};

export const updateComment = (data, commentId) => {
  return async dispatch => {
    dispatch(contentLoading());
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

export default {
  postComment,
};
