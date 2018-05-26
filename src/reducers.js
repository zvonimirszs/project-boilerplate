/* eslint import/no-named-default: off */

import { combineReducers } from 'redux';

const dummyReducer = (store = {}) => store;

export const reducers = combineReducers({
  dummy: dummyReducer,
  // place other reducers here,
});
