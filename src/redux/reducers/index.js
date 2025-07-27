import {combineReducers} from 'redux';
import storeReducer from './storeReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  storeReducer,
  authReducer,
});

export default rootReducer;
