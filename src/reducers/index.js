import { combineReducers } from 'redux';
import userProfile from './profile.reducers';
import articlesUpdate from './articles-update.reducers';

const reducers = combineReducers({ userProfile, articlesUpdate });
export default reducers;
