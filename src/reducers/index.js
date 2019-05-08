import { combineReducers } from 'redux';
import articles from './article.reducers';
import userProfile from './profile.reducers';
import passwordReset from './forgotPassword.reducers';
import auth from './auth.reducer';
import isLoadingReducer from './loading.reducer';

const reducers = combineReducers({
  auth,
  userProfile,
  articles,
  passwordReset,
  isLoadingReducer,
});

export default reducers;
