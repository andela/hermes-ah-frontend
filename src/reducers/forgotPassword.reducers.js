import actiontype from '../constants/forgotPassword.constants';

const initialState = {};

const passwordReset = (state = initialState, action) => {
  switch (action.type) {
    case actiontype.FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
      };
    case actiontype.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default passwordReset;
