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
      const article = await http.get(`/article/${articleId}`);
      dispatch(getSingleArticlesSuccess(article.data.article));
      return article;
    } catch (ex) {
      return dispatch(getSingleArticlesError());
    }
  };
};

export default {
  getSingleArticle,
};
