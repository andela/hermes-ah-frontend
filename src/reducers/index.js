import { combineReducers } from 'redux';
import userProfile from './profile.reducers';

const reducers = combineReducers({ userProfile });

export default reducers;
