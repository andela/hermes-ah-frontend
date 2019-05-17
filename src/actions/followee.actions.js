import { toast } from 'react-toastify';
import actions from '../constants/followee.constants';
import http from '../utils/httpService';
import exceptionHandler from '../utils/exceptionHandler';

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

export const followSuccess = followedUser => {
  return {
    type: actions.FOLLOW_SUCCESS,
    followedUser,
  };
};

export const followFailure = () => {
  return {
    type: actions.FOLLOW_FAILURE,
  };
};

const getFollowee = () => {
  return async dispatch => {
    try {
      const followee = await http.get(`/followers`);
      return dispatch(getFolloweeSuccess(followee.data.followers));
    } catch (error) {
      return exceptionHandler(error);
    } finally {
      dispatch(getFolloweeFailure());
    }
  };
};

const followUser = userId => {
  return async dispatch => {
    try {
      const follow = await http.post(`follow/${userId}`);
      dispatch(followSuccess(follow.data));
      toast.success(`You followed ${follow.data.user.last_name}`);
    } catch (error) {
      dispatch(followFailure());
      exceptionHandler(error);
    }
  };
};

const followeeAction = {
  getFollowee,
  followUser,
};

export default followeeAction;
