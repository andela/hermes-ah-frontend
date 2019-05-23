import http from '../utils/httpService';
import contentLoading from './loading.action';
import actionTypes from '../constants/article.constants';

export const getSingleArticlesSuccess = article => ({
  type: actionTypes.FETCH_SINGLE_ARTICLE_SUCCESS,
  article,
});

export const getSingleArticlesError = () => ({
  type: actionTypes.FETCH_SINGLE_ARTICLE_FAILURE,
});

export const getSingleArticle = articleId => {
  return async dispatch => {
    dispatch(contentLoading());
    try {
      const response = await http.get(`/article/${articleId}`);
      dispatch(getSingleArticlesSuccess(response.data.article));
    } catch (ex) {
      dispatch(getSingleArticlesError());
    }
  };
};

export const reset = () => ({
  type: actionTypes.RESET,
});

export default {
  getSingleArticle,
};
