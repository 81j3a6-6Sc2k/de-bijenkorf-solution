import { combineReducers } from 'redux';
import dataReducer from './data.js';

export default combineReducers({
  data: dataReducer
});