import actiontype from '../constants/auth.constants';

const initialState = {
  isLoading: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case actiontype.CONTENT_LOADING:
      return {
        ...state,
      };
    case actiontype.LOGIN_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default auth;
