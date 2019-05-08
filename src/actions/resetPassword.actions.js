import { toast } from 'react-toastify';
import exceptionHandler from '../utils/exceptionHandler';
import http from '../utils/httpService';
import { setToken } from '../utils/authService';
import actionTypes from '../constants/resetPassword.contants';

export const contentLoading = () => ({
  type: actionTypes.CONTENT_LOADING,
});

export const resetPasswordSuccess = () => ({
  type: actionTypes.RESET_PASSWORD_SUCCESS,
});

export const resetPasswordFailure = () => ({
  type: actionTypes.RESET_PASSWORD_FAILURE,
});

export const resetPassword = newPassword => {
  return async dispatch => {
    dispatch(contentLoading());
    try {
      if (!navigator.onLine) {
        return toast.error('Please check your internet connection');
      }
      const params = new URLSearchParams(document.location.search.substring(1));
      const token = params.get('token');
      setToken(token);
      const { data } = await http.patch(
        `/new-password?token=${token}`,
        newPassword
      );
      const messageDispatch = data.message;
      if (messageDispatch) {
        toast.info(
          'You have successfully reset your password. You will be redirected to the login page in 5 seconds',
          {
            type: toast.TYPE.INFO,
            closeButton: false,
            position: toast.POSITION.TOP_CENTER,
          }
        );
        setTimeout(() => {
          window.location = '/login';
        }, 5000);
      }
      return null;
    } catch (error) {
      return exceptionHandler(error);
    } finally {
      dispatch(resetPasswordFailure());
    }
  };
};

export default {
  resetPassword,
};
