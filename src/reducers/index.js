import { combineReducers } from 'redux';
import userProfile from './profile.reducers';
import passwordReset from './forgotPassword.reducers';
import auth from './auth.reducer';
import isLoadingReducer from './loading.reducer';

const reducers = combineReducers({
  auth,
  userProfile,
  passwordReset,
  isLoadingReducer,
});

export default reducers;
