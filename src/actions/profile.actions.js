import actions from '../constants/profile.constants';
import http from '../utils/httpService';
import dummyData from '../utils/dummyData';
import { decodeToken } from '../utils/authService';
import contentLoading from './loading.action';

const { loginUser } = dummyData;

const config = {
  headers: {
    Authorization: localStorage.token,
  },
};

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

const getProfile = () => {
  return async dispatch => {
    dispatch(contentLoading());
    try {
      await loginUser();
      const user = decodeToken();
      const { data } = await http.get(`/profile/${user.id}`, config);
      dispatch(getProfileSuccess(data));
    } catch (error) {
      dispatch(getProfileFailure());
    }
  };
};

const profileAction = {
  getProfile,
};

export default profileAction;
