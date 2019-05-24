import exceptionHandler from '../utils/exceptionHandler';
import actionTypes from '../constants/article.constants';
import http from '../utils/httpService';

export const likeSuccess = article => ({
  type: actionTypes.LIKE_SUCCESS,
  article,
});

export const likeFailure = article => ({
  type: actionTypes.LIKE_FAILURE,
  article,
});

export const likeArticle = article => {
  return async dispatch => {
    try {
      const { data: result } = await http.post(`/likes/${article.id}`);
      const { data } = result;
      const newArticle = article;
      const likeCount = parseInt(data.likes_count, 10);
      newArticle.likes_count = likeCount;
      dispatch(likeSuccess(article));
    } catch (ex) {
      dispatch(likeFailure(article));
      exceptionHandler(ex);
    }
  };
};

export default {
  likeArticle,
};
