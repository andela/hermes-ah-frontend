import { combineReducers } from 'redux';
import userProfile from './profile.reducers';
import auth from './auth.reducer';
import articlesUpdate from './articles-update.reducers';
import userFollowee from './followee.reducers';
import userFollowing from './following.reducers';

const reducers = combineReducers({
  auth,
  userProfile,
  articlesUpdate,
  userFollowee,
  userFollowing,
});

export default reducers;
