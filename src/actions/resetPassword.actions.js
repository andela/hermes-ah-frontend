import { toast } from 'react-toastify';
import exceptionHandler from '../utils/exceptionHandler';
import http from '../utils/httpService';
import actionTypes from '../constants/resetPassword.constants';
import contentLoading from './loading.action';

export const resetPasswordSuccess = () => ({
  type: actionTypes.RESET_PASSWORD_SUCCESS,
});

export const resetPasswordFailure = () => ({
  type: actionTypes.RESET_PASSWORD_FAILURE,
});

const redirect = () => {
  window.location = '/login';
};
export const resetPassword = (newPassword, token) => {
  return async dispatch => {
    dispatch(contentLoading());
    try {
      await http.patch(`/new-password?token=${token}`, newPassword, {
        headers: { Authorization: token },
      });
      toast.info(
        'You have successfully reset your password. Click here to login',
        {
          type: toast.TYPE.INFO,
          closeButton: false,
          position: toast.POSITION.TOP_CENTER,
          onClose: () => redirect(),
        }
      );
      return toast.info();
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
