import actionTypes from '../constants/followee.constants';

const initialState = {
  userFollowee: [],
};

const userFollowee = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_FOLLOWEE_SUCCESS:
      return { ...state, userFollowee: action.followee };
    case actionTypes.FETCH_FOLLOWEE_FAILURE:
      return { ...state };
    default:
      return state;
  }
};

export default userFollowee;
