import exceptionHandler from '../utils/exceptionHandler';
import http from '../utils/httpService';
import { setToken } from '../utils/authService';
import actionTypes from '../constants/auth.constants';

const url = '/auth';

export const contentLoading = () => ({
  type: actionTypes.CONTENT_LOADING,
});

export const loginError = () => ({
  type: actionTypes.LOGIN_ERROR,
});

export const login = userObj => {
  return async dispatch => {
    dispatch(contentLoading());
    try {
      const { data } = await http.post(`${url}/login`, userObj);
      const { user } = data;
      const { token } = user;
      return setToken(token);
    } catch (ex) {
      return exceptionHandler(ex);
    } finally {
      dispatch(loginError());
    }
  };
};

export default {
  login,
};
