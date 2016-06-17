// import set from './set';
import { combineReducers } from 'redux';
import byId, * as fromById from './byId';
import createList, * as fromList from './createList';
import stopwatch from './stopwatch';
// an array of id keys
// const allIds = (state = [], action) => {
//   if (action.filter !== 'all') {
//     return state
//   }
//   switch (action.type) {
//     case 'RECEIVE_SETS':
//       return action.response.map(set => set.id);
//     // case 'ADD_SET':
//     //   return [...state, action.id];
//     case 'REMOVE_SET':
//       return state.filter(id => id !== action.id);
//     default:
//       return state;
//   }
// }

// const activeIds = (state = [], action) => {
//   if (action.filter !== 'active') {
//     return state;
//   }
//   switch (action.type) {
//     case 'RECEIVE_SETS':
//       return action.response.map(set => set.id);
//     default:
//       return state;
//   }
// }

// const completedIds = (state = [], action) => {
//   if (action.filter !== 'completed') {
//     return state;
//   }
//   switch (action.type) {
//     case 'RECEIVE_SETS':
//       return action.response.map(set => set.id);
//     default:
//       return state;
//   }
// }

// keys are filters so the state appears
 // under that name
const listByFilter = combineReducers({
  all: createList('all'),
  active: createList('active'),
  completed: createList('completed')
})

const sets = combineReducers({
  byId,
  // allIds
  listByFilter,
  stopwatch
})

export default sets;

// const getAllSets = (state) =>
//    state.allIds.map(id => state.byId[id]);


export const getVisibleSets = (
  state,
  filter
) => {
  const ids = fromList.getIds(state.listByFilter[filter]);
  return ids.map(id => fromById.getSet(state.byId, id));
}

export const getIsFetching = (state, filter) =>
  fromList.getIsFetching(state.listByFilter[filter]);

