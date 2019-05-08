import actions from '../constants/following.constants';
import http from '../utils/httpService';

const url = '/following';

export const getFollowingSuccess = following => {
  return {
    type: actions.FETCH_FOLLOWING_SUCCESS,
    following,
  };
};

export const getFollowingFailure = () => {
  return {
    type: actions.FETCH_FOLLOWING_FAILURE,
  };
};

const getFollowing = () => {
  return async dispatch => {
    try {
      const following = await http.get(`${url}`);
      dispatch(getFollowingSuccess(following.data.following));
    } catch (error) {
      dispatch(getFollowingFailure());
    }
  };
};

const followingAction = {
  getFollowing,
};

export default followingAction;
