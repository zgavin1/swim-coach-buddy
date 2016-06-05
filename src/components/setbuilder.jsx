import React from 'react';
import { connect } from 'react-redux';

import actions from './../actions/setActions';

// this will become an "action"

// let nextSetId = 0;
// const addSet = (count, dist, interval) => {
//   return {
//     type: "ADD_SET",
//     id: nextSetId++,
//     count,
//     dist,
//     interval
//   };
// };

// gets dispatch using ES6 syntax directly from props
let AddSet = ({ dispatch }) => {
  let dist;
  let count;
  let minutes;
  let seconds;
  
  return (
    <form onSubmit={(e) => {
        e.preventDefault(); 
        if (dist.value === "" || count.value === "" || (minutes.value === "0" && seconds.value === "00")) {
          return;
        }
        const displaySeconds = parseInt(seconds.value) < 10 ? "0" + seconds.value : seconds.value;
        let displayMinutes = parseInt(minutes.value);
        if (displayMinutes === 0) {
          displayMinutes = "";
        }
        const displayInterval = minutes.value.slice(minutes.value.length - 2) + ":" + displaySeconds.slice(displaySeconds.length - 2);
        dispatch(actions.addSet(count.value, dist.value, displayInterval));
        document.getElementById('set-form').reset();
      }}
      id="set-form"
    >
      <h3>Reps</h3>
      <input ref={node=> {
          count=node;
        }}
        type="number"
        min="1"
        max="100" />
      <h3>Distance</h3>
      <input ref={node=> {
          dist = node;
         }}
         type="number"
         min="25"
         max="1000"
         step="25" />
      <h3>Interval</h3>
      <input ref={node=> {
          minutes=node;
        }}
        type="number"
        min="0"
        defaultValue="0" />:
      <input ref={node=> {
          seconds=node;
        }}
        type="number"
        min="0"
        max="59"
        defaultValue="00" />
      <input type="submit" value="Add Set" />
    </form>
  );
};

// Connect call without any argument will 
// not subscribe to the store, but will provide dispatch
const AddSets = connect()(AddSet)

export default AddSets;