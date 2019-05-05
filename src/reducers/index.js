import { combineReducers } from 'redux';
import example from './example.reducer';
import articles from './article.reducers';

const reducers = combineReducers({ example, articles });
export default reducers;
