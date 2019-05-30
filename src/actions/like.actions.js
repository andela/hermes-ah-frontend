import exceptionHandler from '../utils/exceptionHandler';
import actionTypes from '../constants/article.constants';
import http from '../utils/httpService';

export const likeSuccess = likeCount => ({
  type: actionTypes.LIKE_SUCCESS,
  likeCount,
});

export const likeFailure = () => ({
  type: actionTypes.LIKE_FAILURE,
});

export const likeArticle = articleId => {
  return async dispatch => {
    try {
      const { data: result } = await http.post(`/likes/${articleId}`);
      const { data } = result;
      const likeCount = parseInt(data.likes_count, 10);
      dispatch(likeSuccess(likeCount));
    } catch (ex) {
      dispatch(likeFailure());
      exceptionHandler(ex);
    }
  };
};

export default {
  likeArticle,
};
