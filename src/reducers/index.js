import { combineReducers } from 'redux';
import userProfile from './profile.reducers';
import passwordReset from './forgotPassword.reducers';
import auth from './auth.reducer';

const reducers = combineReducers({ auth, userProfile, passwordReset });

export default reducers;
