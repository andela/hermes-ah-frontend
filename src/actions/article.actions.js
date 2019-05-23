import { toast } from 'react-toastify';
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

export const getAnArticleSuccess = article => ({
  type: actionTypes.FETCH_ARTICLE_SUCCESS,
  article,
});

export const getAnArticleError = () => ({
  type: actionTypes.FETCH_ARTICLE_FAILURE,
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
      const { data: articles } = await http.post(`/article`, data);
      dispatch(postArticleSuccess());
      toast.success(articles.message);
      window.location = '/';
      return articles;
    } catch (err) {
      dispatch(postArticleError());
      return exceptionHandler(err);
    }
  };
};

export const getAnArticle = id => {
  return async dispatch => {
    dispatch(contentLoading());
    try {
      console.log('dddddd');
      const article = await http.get(`/article/${id}`);
      dispatch(getAnArticleSuccess());
      // window.location = '/edit-article';
      return article;
    } catch (err) {
      dispatch(getAnArticleError());
      return exceptionHandler(err);
    }
  };
};

export const editAnArticle = (id, data) => {
  return async dispatch => {
    dispatch(contentLoading());
    try {
      const editedArticle = await http.patch(`/article/${id}`, data);
      dispatch(postArticleSuccess());
      toast.success(editedArticle.message);
      window.location = '/';
      return editedArticle;
    } catch (err) {
      dispatch(postArticleError());
      return exceptionHandler(err);
    }
  };
};

export default {
  getAllArticles,
  postArticle,
  getAnArticle,
  editAnArticle,
};
