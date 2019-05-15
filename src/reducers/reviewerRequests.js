import actionTypes from '../constants/reviewerRequests.constant';

const initialState = {
  userRequests: [],
};

const userRequests = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REVIEWER_REQUESTS_SUCCESS:
      return { ...state, userRequests: action.request };
    case actionTypes.REVIEWER_REQUESTS_FAILURE:
      return { ...state };
    default:
      return state;
  }
};

export default userRequests;
