import actiontype from '../constants/resetPassword.contants';

const initialState = {
  isLoading: false,
};

const userResetPassword = (state = initialState, action) => {
  switch (action.type) {
    case actiontype.CONTENT_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case actiontype.RESET_PASSWORD_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case actiontype.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default userResetPassword;
