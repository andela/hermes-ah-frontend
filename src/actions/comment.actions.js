import { toast } from 'react-toastify';
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

export const postComment = data => {
  return async dispatch => {
    dispatch(contentLoading());
    try {
      const comment = await http.post('/comments', data);
      dispatch(postCommentSuccess(comment.data.comment));
      toast.success('comment sent');
      return comment;
    } catch (ex) {
      return exceptionHandler(ex);
    } finally {
      dispatch(postCommentFailure());
    }
  };
};

export default {
  postComment,
};
