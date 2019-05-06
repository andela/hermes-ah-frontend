import { combineReducers } from 'redux';
import userProfile from './profile.reducers';
import forgotPassword from './forgotPassword.reducers';

const reducers = combineReducers({ userProfile, forgotPassword });

export default reducers;
