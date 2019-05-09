import exceptionHandler from '../utils/exceptionHandler';
import http from '../utils/httpService';
import contentLoading from './loading.action';
import actionTypes from '../constants/article.constants';

const url = '/articles';
const url2 = '/article';

export const getAllArticlesSuccess = articles => ({
  type: actionTypes.FETCH_ARTICLES_SUCCESS,
  articles,
});

export const getAllArticlesError = error => ({
  type: actionTypes.FETCH_ARTICLES_ERROR,
  error,
});

// creating a new article action
export const createArticleSuccess = articles => ({
  type: actionTypes.POST_ARTICLE_SUCCESS,
  articles,
});

export const createArticleError = error => ({
  type: actionTypes.POST_ARTICLE_ERROR,
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

export const createNewArticle = () => {
  return async dispatch => {
    dispatch(contentLoading());
    try {
      const newArticles = await http.post(`${url2}`);
      dispatch(createArticleSuccess(newArticles.data.articles));
      return newArticles;
    } catch (err) {
      return exceptionHandler(err);
    } finally {
      dispatch(createArticleError());
    }
  };
};

export default {
  getAllArticles,
  createNewArticle,
};
