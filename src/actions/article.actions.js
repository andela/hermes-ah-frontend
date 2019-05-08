import exceptionHandler from '../utils/exceptionHandler';
import http from '../utils/httpService';
import contentLoading from './loading.action';
import actionTypes from '../constants/article.constants';

const url = '/articles';

export const getAllArticlesSuccess = articles => ({
  type: actionTypes.FETCH_ARTICLES_SUCCESS,
  articles,
});

export const getAllArticlesError = error => ({
  type: actionTypes.FETCH_ARTICLES_ERROR,
  error,
});

export const getAllArticles = () => {
  return async dispatch => {
    dispatch(contentLoading());
    try {
      const articles = await http.get(`${url}`);
      dispatch(getAllArticlesSuccess(articles.data.articles));
      return articles;
    } catch (ex) {
      return exceptionHandler(ex);
    } finally {
      dispatch(getAllArticlesError());
    }
  };
};

export default {
  getAllArticles,
};
