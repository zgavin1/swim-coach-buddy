//  Egghead video 19 is an amazing explanation of
// moving the filtering logic to the server.
// Watch this many times.

const byId = (
  state = {}, // an object with sets sorted by their keys
  action
) => {
  switch (action.type) {
    case 'RECEIVE_SETS':
      let nextState = { ...state };

      action.response.forEach(set => {
        nextState[set.id] = set;
      })
      return nextState;
      // for (var idx in action.response) {
      //   state[action.response[idx].id] = action.response[idx];
      // }
    // case 'ADD_SET':
    // case 'TOGGLE_SET':
    //   return {
    //     ...state,
    //     [action.id]: set(state[action.id], action)
    //   };
      // return state.filter(s => s.id !== action.id);
      // return state.map(s => set(s, action));
    case 'REMOVE_SET':
      nextState = { ...state }
      delete nextState[action.id];
      return nextState;
    default:
      return state;
  }
};

export default byId;
export const getSet = (state, id) => state[id];