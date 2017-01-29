import C from "./../constants";
import { normalize } from 'normalizr';
import * as schema from './schema';
import * as api from './../api';
import { getIsFetching } from './../reducers';

// import { request } from 'request';
var request = require('request');

export const addSet = (count, dist, interval) => (dispatch) =>
   api.addSet(count, dist, interval).then(response => {
      dispatch({
         type: "ADD_SET_SUCCESS",
         response: normalize(response, schema.set)
      })
   })

export const removeSet = (id) => (dispatch) =>
   api.removeSet(id).then(response => {
      dispatch({
         type: "REMOVE_SET_SUCCESS",
         response: normalize(response, schema.set)
      })
   })

export const toggleSet = (id) => (dispatch) =>
   api.toggleSet(id).then(response => {
      dispatch({
         type: "TOGGLE_SET_SUCCESS",
         response: normalize(response, schema.set)
      })
   })

export const fetchSets = (filter) => (dispatch, getState) => {
   if (getIsFetching(getState(), filter)) {
      return Promise.resolve();
   }

   dispatch({
      type: "FETCH_SETS_REQUEST",
      filter
   })

   return request
        .get('http://localhost:3000/api/v1/sets')
        .on('response', response => {
            console.log(response.toJSON());
        })
        .on('error', error => {
            console.log(error);
        })

        // .post('http://localhost:3000/api/v1/sets',
        // {
        //     count : 1,
        //     dist : 25,
        //     interval : 30
        // })
        // .on('response', response => {
        //     console.log(response.toJSON());
        // })
        // .on('error', error => {
        //     console.log(error);
        // })
   //      (e, res, body) => {
   //     if (!error && response.statusCode == 200) {
   //         console.log(body) // Show the body.
   //     } else {
   //          dispatch({
   //              type: "FETCH_SETS_FAILURE",
   //              filter,
   //              message: error.message || "Something went wrong."
   //          })
   //     }
   // })

   // return api.fetchSets(filter).then(
   //    response => {
   //       console.log('normalized response', normalize(response, schema.arrayOfSets))
   //       dispatch({
   //          type: "FETCH_SETS_SUCCESS",
   //          filter,
   //          response: normalize(response, schema.arrayOfSets)
   //       })
   //    },
   //    error => {
   //       dispatch({
   //          type: "FETCH_SETS_FAILURE",
   //          filter,
   //          message: error.message || "Something went wrong."
   //       })
   //    }
   // );
}
