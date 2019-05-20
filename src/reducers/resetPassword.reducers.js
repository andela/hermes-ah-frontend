import actiontype from '../constants/resetPassword.constants';

const initialState = {};

const userResetPassword = (state = initialState, action) => {
  switch (action.type) {
    case actiontype.CONTENT_LOADING:
      return {
        ...state,
      };
    case actiontype.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
      };
    case actiontype.RESET_PASSWORD_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default userResetPassword;
