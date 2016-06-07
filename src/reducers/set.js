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
    // case 'REMOVE_SET':
    //   if (state.id !== action.id) {
    //     return;
    //   }
    //   return state;
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

export default set;