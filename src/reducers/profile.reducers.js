import actionTypes from '../constants/profile.constants';

const initialState = {
  userProfile: [],
};

const userProfile = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PROFILE_SUCCESS:
      return { ...state, userProfile: action.profile };
    case actionTypes.FETCH_PROFILE_FAILURE:
      return { ...state };
    default:
      return state;
  }
};

export default userProfile;
