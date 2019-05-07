import actiontype from '../constants/auth.constants';

const initialState = {};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case actiontype.LOGIN_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default auth;
