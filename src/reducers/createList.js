const createList = (filter) => {
  return (state = [], action) => {
    if (action.filter !== filter) {
      return state
    }
    switch (action.type) {
      case 'RECEIVE_SETS':
        return action.response.map(set => set.id);
      // case 'ADD_SET':
      //   return [...state, action.id];
      case 'REMOVE_SET':
        return state.filter(id => id !== action.id);
      default:
        return state;
    }
  }
}

export default createList;

export const getIds = (state) => state;