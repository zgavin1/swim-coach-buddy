//  Egghead video 19 is an amazing explanation of
// moving the filtering logic to the server.
// Watch this many times.

const byId = (
  state = {}, // an object with sets sorted by their keys
  action
) => {
  if (action.response) {
    return {
      ...state,
      ...action.response.entities.sets
    }
  }
  return state
  // switch (action.type) {
  //   case 'FETCH_SETS_SUCCESS':
  //     let nextState = { ...state };

  //     action.response.forEach(set => {
  //       nextState[set.id] = set;
  //     })
  //     return nextState;
  //   case 'ADD_SET_SUCCESS':
  //   case 'TOGGLE_SET_SUCCESS':
  //     return {
  //       ...state,
  //       [action.response.id]: action.response
  //     }
  //     // for (var idx in action.response) {
  //     //   state[action.response[idx].id] = action.response[idx];
  //     // }
  //   // case 'ADD_SET':
  //     // return state.filter(s => s.id !== action.id);
  //     // return state.map(s => set(s, action));
  //   case 'REMOVE_SET_SUCCESS':
  //     nextState = { ...state }
  //     delete nextState[action.response.id];
  //     return nextState;
  //   default:
  //     return state;
  // }
};

export default byId;
export const getSet = (state, id) => state[id];
