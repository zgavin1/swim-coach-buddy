import C from "./../constants";
// import { v4 } from 'node-uuid';
import { normalize } from 'normalizr';
import * as schema from './schema';
import * as api from './../api';
import { getIsFetching } from './../reducers';

// let nextSetId = 0;
// previous line will initialize to zero on every refresh
// if im persisting state this becomes an issue

// DA's egghead tutorial suggests using the module 'node-uuid'
// method #v4 from uuid builds a unique id every time 
// export const addSet = (count, dist, interval) => ({
export const addSet = (count, dist, interval) => (dispatch) =>
   api.addSet(count, dist, interval).then(response => {
      // console.log('normalized response', normalize(response, schema.set))
      dispatch({
         type: "ADD_SET_SUCCESS",
         response: normalize(response, schema.set)
      })
   })

export const removeSet = (id) => (dispatch) =>
   api.removeSet(id).then(response => {
      dispatch({
         type: "REMOVE_SET_SUCCESS",
         response
      })   
   })

export const toggleSet = (id) => (dispatch) =>
   api.toggleSet(id).then(response => {
      dispatch({
         type: "TOGGLE_SET_SUCCESS",
         response: normalize(response, schema.set)
      })
   })

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
      type: "FETCH_SETS_REQUEST",
      filter
   })

   return api.fetchSets(filter).then(
      response => {
         console.log('normalized response', normalize(response, schema.arrayOfSets))
         dispatch({
            type: "FETCH_SETS_SUCCESS",
            filter,
            response: normalize(response, schema.arrayOfSets)
         })
      },
      error => {
         dispatch({
            type: "FETCH_SETS_FAILURE",
            filter,
            message: error.message || "Something went wrong."
         })
      }
   );
}
