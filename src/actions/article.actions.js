import exceptionHandler from '../utils/exceptionHandler';
import http from '../utils/httpService';
import contentLoading from './loading.action';
import actionTypes from '../constants/article.constants';

export const getAllArticlesSuccess = articles => ({
  type: actionTypes.FETCH_ARTICLES_SUCCESS,
  articles,
});

export const getAllArticlesError = () => ({
  type: actionTypes.FETCH_ARTICLES_FAILURE,
});

export const postArticleSuccess = article => ({
  type: actionTypes.POST_ARTICLES_SUCCESS,
  article,
});

export const postArticleError = () => ({
  type: actionTypes.POST_ARTICLES_FAILURE,
});

export const getAllArticles = () => {
  return async dispatch => {
    dispatch(contentLoading());
    try {
      const articles = await http.get(`/articles`);
      dispatch(getAllArticlesSuccess(articles.data.articles));
      return articles;
    } catch (ex) {
      return exceptionHandler(ex);
    } finally {
      dispatch(getAllArticlesError());
    }
  };
};

export const postArticle = data => {
  return async dispatch => {
    dispatch(contentLoading());
    try {
      const article = await http.post(`/article`, data);
      dispatch(postArticleSuccess());
      return article;
    } catch (err) {
      dispatch(postArticleError());
      return exceptionHandler(err);
    }
  };
};

export default {
  getAllArticles,
  postArticle,
};
