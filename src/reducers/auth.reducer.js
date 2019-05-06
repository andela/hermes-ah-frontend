import actiontype from '../constants/auth.constants';

const initialState = {
  isLoading: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case actiontype.CONTENT_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case actiontype.LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default auth;
