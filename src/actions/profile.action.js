import { toast } from 'react-toastify';
import actions from '../constants/profile.constants';
import http from '../utils/httpService';
import { decodeToken } from '../utils/authService';
import contentLoading from './loading.action';
import exceptionHandler from '../utils/exceptionHandler';
import suggestedResearchers from '../utils/suggestedResearchers';

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

export const fetchSuggestedResearchersSuccess = researchers => {
  return {
    type: actions.FETCH_SUGGESTED_RESEARCHERS_SUCCESS,
    researchers,
  };
};

export const fetchSuggestedResearchersFailure = () => {
  return {
    type: actions.FETCH_SUGGESTED_RESEARCHERS_FAILURE,
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
      return dispatch(updateProfileSuccess(data));
    } catch (error) {
      dispatch(updateProfileFailure());
      return exceptionHandler(error);
    }
  };
};

const getSuggestions = () => {
  return async dispatch => {
    try {
      const data = await suggestedResearchers();
      dispatch(fetchSuggestedResearchersSuccess(data));
    } catch (error) {
      dispatch(fetchSuggestedResearchersFailure());
      exceptionHandler(error);
    }
  };
};

const profileAction = {
  getProfile,
  updateProfile,
  getSuggestions,
};

export default profileAction;
