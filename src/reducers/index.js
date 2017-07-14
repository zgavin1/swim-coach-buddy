import { combineReducers } from 'redux';
import { sets } from './sets';
// import byId, * as fromById from './byId';
// import createList, * as fromList from './createList';
import stopwatch from './stopwatch';

// keys are filters so the state appears
 // under that name
// const listByFilter = combineReducers({
//   all: createList('all'),
//   active: createList('active'),
//   completed: createList('completed')
// })

export default combineReducers({
    sets,
    // workouts,
    stopwatch
});

// export const getVisibleSets = (
//   state,
//   filter
// ) => {
//   const ids = fromList.getIds(state.listByFilter[filter]);
//   return ids.map(id => fromById.getSet(state.byId, id));
// }

// export const getIsFetching = (state, filter) =>
//   fromList.getIsFetching(state.listByFilter[filter]);

// export const getErrorMessage = (state, filter) =>
//   fromList.getErrorMessage(state.listByFilter[filter]);
