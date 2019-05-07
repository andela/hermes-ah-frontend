import actiontype from '../constants/forgotPassword.constants';

const initialState = {
  isLoading: false,
};

const passwordReset = (state = initialState, action) => {
  switch (action.type) {
    case actiontype.CONTENT_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case actiontype.FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case actiontype.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default passwordReset;
