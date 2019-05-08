import { toast } from 'react-toastify';
import exceptionHandler from '../utils/exceptionHandler';
import http from '../utils/httpService';
import { setToken } from '../utils/authService';
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

export default {
  login,
  signup,
};
