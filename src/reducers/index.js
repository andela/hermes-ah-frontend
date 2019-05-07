import { combineReducers } from 'redux';
import userProfile from './profile.reducers';
import auth from './auth.reducer';
import articlesUpdate from './articles-update.reducers';

const reducers = combineReducers({ auth, userProfile, articlesUpdate });

export default reducers;
