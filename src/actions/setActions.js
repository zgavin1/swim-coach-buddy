import C from "./../constants";
import { normalize } from 'normalizr';
import * as schema from './schema';
import { getIsFetching } from './../reducers/sets';

var request = require('request');

export const addSet = (count, dist, interval) => (dispatch) => {
    var postReqBody = {
        count,
        dist,
        interval
    }

    request.post({
        url: 'http://localhost:3000/sets',
        form: postReqBody,
    },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var formattedResponse = JSON.parse(body);
            dispatch({
                type: "ADD_SET_SUCCESS",
                response: normalize(formattedResponse, schema.set)
            })
        } else {
            console.log('error');
        }
    })
}

export const removeSet = (id) => (dispatch) =>
    request.delete({
        url : 'http://localhost:3000/set/' + id
    },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            dispatch({
                type: "REMOVE_SET_SUCCESS",
                response: normalize({ id }, schema.set)
            })
        } else {
            console.log(error);
        }
    })

export const toggleSet = (id) => (dispatch) =>
    request.put({
        url: 'http://localhost:3000/set/' + id
    },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var formattedResponse = JSON.parse(body);
            console.log(formattedResponse);
            dispatch({
                type: "TOGGLE_SET_SUCCESS",
                response: normalize(formattedResponse, schema.set)
            })
        } else {
            console.log(error);
        }
    })

export const fetchSets = (filter) => (dispatch, getState) => {
   if (getIsFetching(getState(), filter)) {
      return Promise.resolve();
   }

   dispatch({
    type: "FETCH_SETS_REQUEST",
    filter
   })

   request({
       url: 'http://localhost:3000/sets',
       form: {filter} 
   }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            const resSets = JSON.parse(body);
            dispatch({
                 type: "FETCH_SETS_SUCCESS",
                 filter,
                 response: normalize(resSets, schema.arrayOfSets)
              })
        } else {
            dispatch({
                 type: "FETCH_SETS_FAILURE",
                 filter,
                 message: error.message || "Something went wrong."
             })
        }
    })
}
