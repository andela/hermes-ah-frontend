import { toast } from 'react-toastify';
import actions from '../constants/reported.contants';
import http from '../utils/httpService';
import contentLoading from './loading.action';
import exceptionHandler from '../utils/exceptionHandler';

export const getReportedArticleSuccess = reports => {
  return {
    type: actions.GET_REPORTED_ARTICLE_SUCCESS,
    reports,
  };
};

export const getReportedArticleFailure = () => {
  return {
    type: actions.GET_REPORTED_ARTICLE_FAILURE,
  };
};

const getReportedArticle = () => {
  return async dispatch => {
    dispatch(contentLoading());
    try {
      if (!navigator.onLine) {
        return toast.error('Please check your internet connection');
      }
      const { data } = await http.get(`/reported-articles`);
      return dispatch(getReportedArticleSuccess(data.reportedArticles));
    } catch (error) {
      dispatch(getReportedArticleFailure());
      return exceptionHandler(error);
    }
  };
};

const reportedArticleAction = {
  getReportedArticle,
};

export default reportedArticleAction;
