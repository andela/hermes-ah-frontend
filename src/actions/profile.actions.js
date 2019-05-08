import actions from '../constants/profile.constants';
import http from '../utils/httpService';
import { decodeToken } from '../utils/authService';

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
    try {
      const user = decodeToken();
      const { data } = await http.get(`/profile/${user.id}`);
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
