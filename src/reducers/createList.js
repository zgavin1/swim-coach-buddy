import { combineReducers } from 'redux'

const createList = (filter) => {
   const ids = (state = [], action) => {
      if (action.filter !== filter) {
         return state
      }
      switch (action.type) {
         case 'FETCH_TODOS_SUCCESS':
            return action.response.map(set => set.id);
      // case 'ADD_SET':
      //   return [...state, action.id];
         case 'REMOVE_SET':
            return state.filter(id => id !== action.id);
         default:
            return state;
      }
   }const errorMessage = (state = null, action) => {
      if (filter !== action.filter) {
         return state
      }
      switch (action.type) {
         case: 'FETCH_TODOS_FAILURE':
            return action.message;
         case 'FETCH_TODOS_SUCCESS':
         case 'FETCH_TODOS_REQUEST':
            return null;
         default:
            return state;
      }
   }

   const isFetching = (state = false, action) => {
      if (action.filter !== filter) {
         return state
      }
      switch (action.type) {
         case 'FETCH_TODOS_REQUEST':
            return true;
         case 'FETCH_TODOS_SUCCESS':
         case 'FETCH_TODOS_FAILURE':
            return false
         default:
            return state;
      }
   }

   return combineReducers({
      ids,
      errorMessage,
      isFetching
   })
}

export default createList;

export const getIds = (state) => state.ids;
export const getIsFetching = (state) => state.isFetching;
export const getErrorMessage = (state) => state.errorMessage;