import { combineReducers } from 'redux';
import userProfile from './profile.reducers';
import passwordReset from './forgotPassword.reducers';
import auth from './auth.reducer';
import articlesUpdate from './articles-update.reducers';
import isLoadingReducer from './loading.reducer';

const reducers = combineReducers({
  auth,
  userProfile,
  passwordReset,
  isLoadingReducer,
  articlesUpdate,
});

export default reducers;
