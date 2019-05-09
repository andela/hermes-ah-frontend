import actionTypes from '../constants/following.constants';

const initialState = {
  userFollowing: [],
};

const userFollowing = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_FOLLOWING_SUCCESS:
      return { ...state, userFollowing: action.following };
    case actionTypes.FETCH_FOLLOWING_FAILURE:
      return { ...state };
    default:
      return state;
  }
};

export default userFollowing;
