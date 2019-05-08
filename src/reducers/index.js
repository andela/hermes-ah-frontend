import { combineReducers } from 'redux';
import userProfile from './profile.reducers';
import passwordReset from './forgotPassword.reducers';
import userResetPassword from './resetPassword.reducers';
import auth from './auth.reducer';
import isLoadingReducer from './loading.reducer';

const reducers = combineReducers({
  auth,
  userProfile,
  passwordReset,
  userResetPassword,
  isLoadingReducer,
});

export default reducers;
