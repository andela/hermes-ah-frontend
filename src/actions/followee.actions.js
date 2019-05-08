import actions from '../constants/followee.constants';
import http from '../utils/httpService';
import exceptionHandler from '../utils/exceptionHandler';

const url = '/followers';

export const getFolloweeSuccess = followee => {
  return {
    type: actions.FETCH_FOLLOWEE_SUCCESS,
    followee,
  };
};

export const getFolloweeFailure = () => {
  return {
    type: actions.FETCH_FOLLOWEE_FAILURE,
  };
};

const getFollowee = () => {
  return async dispatch => {
    try {
      const followee = await http.get(`${url}`);
      return dispatch(getFolloweeSuccess(followee.data.followers));
    } catch (error) {
      return exceptionHandler(error);
    } finally {
      dispatch(getFolloweeFailure());
    }
  };
};

const followeeAction = {
  getFollowee,
};

export default followeeAction;
