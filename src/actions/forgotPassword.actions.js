import { toast } from 'react-toastify';
import exceptionHandler from '../utils/exceptionHandler';
import http from '../utils/httpService';
import actionTypes from '../constants/forgotPassword.constants';
import contentLoading from './loading.action';

const url = '/auth';

export const forgotPasswordSuccess = () => ({
  type: actionTypes.FORGOT_PASSWORD_SUCCESS,
});

export const forgotPasswordFailure = () => ({
  type: actionTypes.FORGOT_PASSWORD_FAILURE,
});

export const forgotPassword = userObj => {
  return async dispatch => {
    dispatch(contentLoading());
    try {
      if (!navigator.onLine) {
        return toast.error('Please check your internet connection');
      }
      const { data } = await http.post(`${url}/reset`, userObj);
      const messageDispatch = data.data[0].message;
      if (messageDispatch) {
        toast.info(`${messageDispatch}`, {
          type: toast.TYPE.INFO,
          closeButton: false,
          position: toast.POSITION.TOP_CENTER,
        });
      }
      return null;
    } catch (error) {
      return exceptionHandler(error);
    } finally {
      dispatch(forgotPasswordFailure());
    }
  };
};

export default {
  forgotPassword,
};
