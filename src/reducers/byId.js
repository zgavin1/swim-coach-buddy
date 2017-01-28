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
};

export default byId;
export const getSet = (state, id) => state[id];
