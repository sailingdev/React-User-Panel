import {combineReducers} from 'redux'
import errorReducer  from '../reducers/errorReducers';
import authReducers from './authReducers';


export default combineReducers({
  errors:errorReducer,
  auth:authReducers
});