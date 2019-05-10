import { toast } from 'react-toastify';
import exceptionHandler from '../utils/exceptionHandler';
import http from '../utils/httpService';
import { setToken, removeToken } from '../utils/authService';
import actionTypes from '../constants/auth.constants';
import contentLoading from './loading.action';

const url = '/auth';

export const loginError = () => ({
  type: actionTypes.LOGIN_FAILURE,
});

const redirect = redirectUrl => {
  window.location = redirectUrl;
};

export const login = userObj => {
  return async dispatch => {
    if (!navigator.onLine) {
      return toast.error('Please check your internet connection');
    }
    dispatch(contentLoading());
    try {
      const { data } = await http.post(`${url}/login`, userObj);
      const { user } = data;
      const { token } = user;
      setToken(token);
      return redirect('/');
    } catch (ex) {
      return exceptionHandler(ex);
    } finally {
      dispatch(loginError());
    }
  };
};

export const signup = userObj => {
  return async dispatch => {
    if (!navigator.onLine) {
      return toast.error('Please check your internet connection');
    }
    dispatch(contentLoading());
    try {
      const { data } = await http.post(`${url}/signup`, userObj);
      const { user } = data;
      const { token } = user;
      setToken(token);
      return redirect('/');
    } catch (ex) {
      return exceptionHandler(ex);
    } finally {
      dispatch(loginError());
    }
  };
};

export const confirmAccount = token => {
  return async dispatch => {
    dispatch(contentLoading());
    try {
      const { data } = await http.patch(`${url}/verification/${token}`);
      const { message } = data;
      return message;
    } catch (ex) {
      return exceptionHandler(ex);
    } finally {
      dispatch(loginError());
    }
  };
};

export const logout = () => {
  removeToken();
  window.location = '/login';
};

export default {
  login,
  signup,
  confirmAccount,
  logout,
};
