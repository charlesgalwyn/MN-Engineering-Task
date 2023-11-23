import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authentication/reducer';

const reducers = combineReducers({
  authReducer,
});

export default reducers;