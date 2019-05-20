import { toast } from 'react-toastify';
import exceptionHandler from '../utils/exceptionHandler';
import actionTypes from '../constants/article.constants';
import http from '../utils/httpService';

export const likeSuccess = (articleId, article) => ({
  type: actionTypes.LIKE_SUCCESS,
  articleId,
  article,
});

export const likeFailure = article => ({
  type: actionTypes.LIKE_FAILURE,
  article,
});

export const likeArticle = (articleId, article) => {
  return async dispatch => {
    try {
      dispatch(likeSuccess(articleId, article));
      const { data: result } = await http.post(`/likes/${articleId}`);
      const { data } = result;
      if (!data.like) {
        dispatch(likeFailure(article));
        toast.error('You have already like this article');
      }
    } catch (ex) {
      exceptionHandler(ex);
    }
  };
};

export default {
  likeArticle,
};
