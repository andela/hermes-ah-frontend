import { toast } from 'react-toastify';
import actions from '../constants/reported.contants';
import http from '../utils/httpService';
import contentLoading from './loading.action';

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
        toast.error('Please check your internet connection');
      }
      const { data } = await http.get(`/reported-articles`);
      dispatch(getReportedArticleSuccess(data.reportedArticles));
    } catch (error) {
      dispatch(getReportedArticleFailure());
    }
  };
};

const reportedArticleAction = {
  getReportedArticle,
};

export default reportedArticleAction;
