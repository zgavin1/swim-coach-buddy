import { combineReducers } from 'redux';
// // Set App
const set = (
  state,
  action
) => {
  switch (action.type) {
    case 'ADD_SET':
      return {
        id: action.id,
        count: action.count,
        dist: action.dist,
        interval: action.interval,
        completed: false
      };
    case 'TOGGLE_SET':
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state
  }
};


const sets = (
  state = [],
  action
) => {
  switch (action.type) {
    case 'ADD_SET':
      return [
        ...state,
        set(undefined, action)
      ];
    case 'TOGGLE_SET':
      return state.map(s => set(s, action));
    default:
      return state;
  }
};

const visibilityFilter = (
  state = "SHOW_ALL",
  action
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
  };
  
  return state;
};


// Could include laps later.

const defaultWatchState = {
  running: false,
  time: 0,
  offset: 0
}

const stopWatch = (
  state = defaultWatchState,
  action
) => {
  switch (action.type) {
    case 'INCREMENT_STOPWATCH':
      return {
        ...state,
        time: state.time + (action.time - state.offset),
        offset: action.time
      }
    case 'START_STOPWATCH':
      return {
        ...state,
        running: true,
        offset: action.offset
      };
    case 'STOP_STOPWATCH':
      return {
        ...state,
        running: false
      };
    case 'RESET_STOPWATCH':
      return {
        ...state,
        time: 0,
        offset: 0
      };
    default:
      return state;
  } 
}



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
  visibilityFilter,
  stopWatch
});