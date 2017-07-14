import { combineReducers } from 'redux'

const createList = () => {
   const ids = (state = [], action) => {
      switch (action.type) {
         case 'FETCH_WORKOUTS_SUCCESS':
            return action.response.result;
         case 'ADD_WORKOUT_SUCCESS':
            return state;
         default:
            return state;
      }
   }

   const errorMessage = (state = null, action) => {
      if (filter !== action.filter) {
         return state
      }
      switch (action.type) {
         case 'FETCH_WORKOUTS_FAILURE':
            return action.message;
         case 'FETCH_WORKOUTS_SUCCESS':
         case 'FETCH_WORKOUTS_REQUEST':
            return null;
         default:
            return state;
      }
   }

   const isFetching = (state = false) => {
      if (action.filter !== filter) {
         return state
      }
      switch (action.type) {
         case 'FETCH_WORKOUTS_REQUEST':
            return true;
         case 'FETCH_WORKOUTS_SUCCESS':
         case 'FETCH_WORKOUTS_FAILURE':
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
