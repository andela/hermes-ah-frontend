import { combineReducers } from 'redux';
import articles from './article.reducers';
import userProfile from './profile.reducers';
import passwordReset from './forgotPassword.reducers';
import userResetPassword from './resetPassword.reducers';
import auth from './auth.reducer';
import userFollowee from './followee.reducers';
import userFollowing from './following.reducers';
import articlesUpdate from './articles-update.reducer';
import isLoadingReducer from './loading.reducer';
import bookmarkedArticles from './bookmarked.reducer';

const reducers = combineReducers({
  auth,
  userProfile,
  articlesUpdate,
  userFollowee,
  userFollowing,
  articles,
  passwordReset,
  userResetPassword,
  isLoadingReducer,
  bookmarkedArticles,
});

export default reducers;
