import { combineReducers } from 'redux'

const createList = (filter) => {
   const ids = (state = [], action) => {
      // if (action.filter !== filter) {
      //    return state
      // }
      switch (action.type) {
         case 'FETCH_SETS_SUCCESS':
            return filter === action.filter ?
               // action.response.map(set => set.id) :
               action.response.result
               state;
      // case 'ADD_SET':
      //   return [...state, action.id];
         case 'ADD_SET_SUCCESS':
            return filter !==  'completed' ?
               // [ ...state, action.response.id] :
               [ ...state, action.response.result] :
               state;
         case 'REMOVE_SET_SUCCESS':
            return state.filter(id => id !== action.response.id);
         case 'TOGGLE_SET_SUCCESS':
         default:
            return state;
      }
   }

   const errorMessage = (state = null, action) => {
      if (filter !== action.filter) {
         return state
      }
      switch (action.type) {
         case 'FETCH_SETS_FAILURE':
            return action.message;
         case 'FETCH_SETS_SUCCESS':
         case 'FETCH_SETS_REQUEST':
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
         case 'FETCH_SETS_REQUEST':
            return true;
         case 'FETCH_SETS_SUCCESS':
         case 'FETCH_SETS_FAILURE':
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