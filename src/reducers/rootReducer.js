import { combineReducers } from 'redux';
import stopwatch from './stopwatch';
import sets, * as fromSets from './sets'

// Neutralize the need for this reducer using
// react-router and the native Link component
// 
// const visibilityFilter = (
//   state = "all",
//   action
// ) => {
//   switch (action.type) {
//     case 'SET_VISIBILITY_FILTER':
//       return action.filter;
//   };
//   return state;
// };


// rewriting #combinereducers

// const combineReducers = (reducers) => {
//   return (state = {}, action) => {
//     return Object.keys(reducers).reduce(
//       (nextState, key) => {
//         nextState[key] = reducers[key]()
//           state[key],
//           action
//         );
//         return nextState;
//       };
//       {}
//     );
//   };
// };

export default combineReducers({
  sets,
  // visibilityFilter,
  stopwatch
});


// arrow notation without curly braces or parentheses
// returns the nested value
export const getVisibleSets = (state, filter) =>
  fromSets.getVisibleSets(state.sets, filter);