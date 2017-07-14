import C from "./../constants";
import { normalize } from 'normalizr';
import * as schema from './schema';
import * as api from './../api';
import { getIsFetching } from './../reducers';

var request = require('request');

export const addWorkout = () => (dispatch) => {
    var postReqBody = {
        count,
        dist,
        interval
    }

    request.post({
        url: 'http://localhost:3000/workouts',
        form: postReqBody,
    },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var formattedResponse = JSON.parse(body);
            dispatch({
                type: "ADD_WORKOUT_SUCCESS",
                response: normalize(formattedResponse, schema.workout)
            })
        } else {
            console.log('error');
        }
    })
}

export const fetchWorkouts = () => (dispatch, getState) => {
   if (getIsFetching(getState())) {
      return Promise.resolve();
   }

   dispatch({
    type: "FETCH_WORKOUTS_REQUEST",
   })

   request({
       url: 'http://localhost:3000/workouts',
       form: {filter} 
   }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            const resSets = JSON.parse(body);
            dispatch({
                 type: "FETCH_WORKOUTS_SUCCESS",
                 filter,
                 response: normalize(resSets, schema.arrayOfSets)
              })
        } else {
            dispatch({
                 type: "FETCH_WORKOUTS_FAILURE",
                 filter,
                 message: error.message || "Something went wrong."
             })
        }
    })
}
