import http from '../utils/httpService';
import actionTypes from '../constants/forgotPassword.constants';

const url = '/auth';

export const contentLoading = () => ({
  type: actionTypes.CONTENT_LOADING,
});

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
      const { data } = await http.post(`${url}/reset`, userObj);
      const messageDispatch = data.data[0].message;
      return dispatch(forgotPasswordSuccess(messageDispatch));
    } catch (ex) {
      return ex;
    }
  };
};

export default {
  forgotPassword,
};
