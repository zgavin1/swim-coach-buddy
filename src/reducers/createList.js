import { combineReducers } from 'redux'

const createList = (filter) => {
   const ids = (state = [], action) => {
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

   const isFetching = (state = false, action) => {
      if (action.filter !== filter) {
         return state
      }
      switch (action.type) {
         case 'REQUEST_SETS':
            return true;
         case 'RECEIVE_SETS':
            return false
         default:
            return state;
      }
   }

   return combineReducers({
      ids,
      isFetching
   })
}

export default createList;

export const getIds = (state) => state.ids;
export const getIsFetching = (state) => state.isFetching;