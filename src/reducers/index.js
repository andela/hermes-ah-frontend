import { combineReducers } from 'redux';
import userProfile from './profile.reducers';
import forgotPassword from './forgotPassword.reducers';
import auth from './auth.reducer';

const reducers = combineReducers({ auth, userProfile, forgotPassword });

export default reducers;
