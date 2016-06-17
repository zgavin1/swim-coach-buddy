import C from "./../constants";
import { v4 } from 'node-uuid';
import * as api from './../api';
import { getIsFetching } from './../reducers';

// let nextSetId = 0;
// previous line will initialize to zero on every refresh
// if im persisting state this becomes an issue

// DA's egghead tutorial suggests using the module 'node-uuid'
// method #v4 from uuid builds a unique id every time 
export const addSet = (count, dist, interval) => ({
   type: C.ADD_SET,
   id: v4(),
   count,
   dist,
   interval
});

export const removeSet = (id) => ({
   type: C.REMOVE_SET,
   id
});

export const toggleSet =  (id) => ({
   type: C.TOGGLE_SET,
   id
});

// const requestSets = (filter) => ({
//    type: "REQUEST_SETS",
//    filter
// })

// const receiveSets = (filter, response) => ({
//    type: C.RECEIVE_SETS,
//    filter,
//    response
// })

export const fetchSets = (filter) => (dispatch, getState) => {
   if (getIsFetching(getState(), filter)) {
      return Promise.resolve();
   }

   dispatch({
      type: "FETCH_TODOS_REQUEST",
      filter
   })

   return api.fetchSets(filter).then(
      response => {
         dispatch({
            type: "FETCH_TODOS_SUCCESS",
            filter,
            response
         })
      },
      error => {
         dispatch({
            type: "FETCH_TODOS_FAILURE",
            filter,
            message: error.message || "Something went wrong."
         })
      }
   );
}
