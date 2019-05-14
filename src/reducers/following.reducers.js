import actionTypes from '../constants/follow.constants';

const initialState = {
  userFollowing: [],
  unFollowedUser: '',
};

const userFollowing = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_FOLLOWING_SUCCESS:
      return { ...state, userFollowing: action.following };
    case actionTypes.FETCH_FOLLOWING_FAILURE:
      return { ...state };
    case actionTypes.UNFOLLOW_SUCCESS: {
      return { ...state, userFollowing: action.unFollowedUser };
    }
    case actionTypes.UNFOLLOW_FAILURE:
      return { ...state };
    default:
      return state;
  }
};

export default userFollowing;
