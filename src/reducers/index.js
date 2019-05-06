import { combineReducers } from 'redux';
import articles from './article.reducers';
import userProfile from './profile.reducers';
import auth from './auth.reducer';

const reducers = combineReducers({ auth, userProfile, articles });

export default reducers;
