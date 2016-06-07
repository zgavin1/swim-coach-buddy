import set from './set';

import { combineReducers } from 'redux';

const byId = (
  state = {}, // an object with todos sorted by their keys
  action
) => {
  switch (action.type) {
    case 'ADD_SET':
    case 'TOGGLE_SET':
      return {
        ...state,
        [action.id]: set(state[action.id], action)
      };
      // return state.filter(s => s.id !== action.id);
      // return state.map(s => set(s, action));
    case 'REMOVE_SET':
      delete state[action.id];
      return state;
    default:
      return state;
  }
};

const allIds = (
   state = [], // an array of id keys
   action
) => {
   switch (action.type) {
      case 'ADD_SET':
         return [...state, action.id];
      case 'REMOVE_SET':
         return state.filter(id => id !== action.id);
      default:
         return state;
   }
}

const sets = combineReducers({
   byId,
   allIds
})

export default sets;

const getAllSets = (state) =>
   state.allIds.map(id => state.byId[id]);


export const getVisibleSets = (
  state,
  filter
) => {
   const allSets = getAllSets(state);
   switch (filter) {
      case "all":
         return allSets;
      case "completed":
         return allSets.filter(
           s => s.completed
         );
      case "active":
         return allSets.filter(
           s => !s.completed
         );
      default:
         throw new Error('Uknown filter.');
   }
}

