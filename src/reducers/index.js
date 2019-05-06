import { combineReducers } from 'redux';
import userProfile from './profile.reducers';
import auth from './auth.reducer';

const reducers = combineReducers({ auth, userProfile });

export default reducers;
