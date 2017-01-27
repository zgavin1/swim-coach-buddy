import { combineReducers } from 'redux'

const createList = (filter) => {
   const handleToggle = (state, action) => {
      // action.response.entities.sets[id].completed
      const { result: toggleId, entities } = action.response;
      const { completed } = entities.sets[toggleId];
      const shouldRemove = (
         (completed && filter === 'active') ||
         (!completed && filter === 'completed')
      );
      return shouldRemove ?
         state.filter(id => id !== toggleId) :
         state;
   }

   const ids = (state = [], action) => {
      switch (action.type) {
         case 'FETCH_SETS_SUCCESS':
            return filter === action.filter ?
               action.response.result :
               state;
         case 'ADD_SET_SUCCESS':
            return filter !==  'completed' ?
               [ ...state, action.response.result] :
               state;
         case 'REMOVE_SET_SUCCESS':
            return state.filter(id => id !== action.response.result);
         case 'TOGGLE_SET_SUCCESS':
            return handleToggle(state, action)
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
