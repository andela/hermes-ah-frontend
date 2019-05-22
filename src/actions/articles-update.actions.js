import { toast } from 'react-toastify';
import http from '../utils/httpService';
import exceptionHandler from '../utils/exceptionHandler';
import contentLoading from './loading.action';
import actionTypes from '../constants/my-articles.constants';

export const deleteArticlesSuccess = deletedArticle => ({
  type: actionTypes.DELETE_ARTICLES_SUCCESS,
  deletedArticle,
});

export const deleteArticlesFailure = () => ({
  type: actionTypes.DELETE_ARTICLES_FAILURE,
});

const fetchArticles = () => {
  return async dispatch => {
    try {
      dispatch({ type: 'GET_ARTICLES' });
      const articles = await http.get('/myArticles');
      dispatch({
        type: 'ARTICLES_RETURNED',
        payload: articles.data.articles,
      });
    } catch (ex) {
      exceptionHandler(ex);
    }
  };
};

const deleteArticle = articleId => {
  return async dispatch => {
    dispatch(contentLoading());
    try {
      console.log(articleId, '>>>>>>>>>>>>');
      const deletedArticle = await http.delete(`/article/${articleId}`);
      console.log(deletedArticle.data.message, '-------');
      toast.success(deletedArticle.data.message);
      dispatch(deleteArticlesSuccess(deletedArticle.data));
    } catch (ex) {
      exceptionHandler(ex);
    } finally {
      dispatch(deleteArticlesFailure());
    }
  };
};

export default {
  fetchArticles,
  deleteArticle,
};
