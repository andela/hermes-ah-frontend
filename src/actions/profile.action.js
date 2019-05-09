import { toast } from 'react-toastify';
import actions from '../constants/profile.constants';
import http from '../utils/httpService';
import { decodeToken } from '../utils/authService';
import contentLoading from './loading.action';
import exceptionHandler from '../utils/exceptionHandler';

export const getProfileSuccess = profile => {
  return {
    type: actions.FETCH_PROFILE_SUCCESS,
    profile,
  };
};

export const getProfileFailure = () => {
  return {
    type: actions.FETCH_PROFILE_FAILURE,
  };
};

export const updateProfileSuccess = profile => {
  return {
    type: actions.UPDATE_PROFILE_SUCCESS,
    profile,
  };
};

export const updateProfileFailure = () => {
  return {
    type: actions.UPDATE_PROFILE_FAILURE,
  };
};

const getProfile = () => {
  return async dispatch => {
    dispatch(contentLoading());
    try {
      if (!navigator.onLine) {
        return toast.error('Please check your internet connection');
      }
      const user = decodeToken();
      const { data } = await http.get(`/profile/${user.id}`);
      return dispatch(getProfileSuccess(data));
    } catch (error) {
      return exceptionHandler(error);
    } finally {
      dispatch(getProfileFailure());
    }
  };
};

const updateProfile = obj => {
  return async dispatch => {
    dispatch(contentLoading());
    try {
      if (!navigator.onLine) {
        return toast.error('Please check your internet connection');
      }
      const user = decodeToken();
      const { data } = await http.patch(`/profile/${user.id}`, obj);
      dispatch(updateProfileSuccess(data));
      toast.info('You have successfully update your profile.', {
        type: toast.TYPE.INFO,
        closeButton: false,
        position: toast.POSITION.TOP_CENTER,
      });
      return 'success';
    } catch (error) {
      dispatch(updateProfileFailure());
      return exceptionHandler(error);
    }
  };
};

const profileAction = {
  getProfile,
  updateProfile,
};

export default profileAction;
