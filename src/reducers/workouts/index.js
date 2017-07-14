import { combineReducers } from 'redux';
import byId, * as fromById from './byId';
import createList, * as fromList from './createList';
// import stopwatch from './stopwatch';

// keys are filters so the state appears
 // under that name
const listByFilter = combineReducers({
  all: createList()
})

const sets = combineReducers({
  byId,
  listByFilter
})

export default sets;

export const getIsFetching = (state) =>
  fromList.getIsFetching();

export const getErrorMessage = (state, filter) =>
  fromList.getErrorMessage();
