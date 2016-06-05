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
      className="ui form" >
      <h4 className="ui dividing header">build your workout</h4>

      <div className="field">
        <label>describe your set</label>
        <div className="two fields">
          <div className="field">
            <input 
              ref={node=> {
                count=node;
              }}
              type="number"
              min="1"
              max="100"
              placeholder="reps..." />
          </div> 
          <p>X</p>
          <div className="field">
            <input 
              ref={node=> {
                dist=node;
              }}
              type="number"
              min="0"
              max="1000"
              step="25"
              placeholder="distance..." />
          </div>
        </div>
      </div>
      <div className="field">
        <label>interval</label>
        <div className="two fields">
          <div className="field">
            <input 
            ref={node=> {
              minutes=node;
            }}
            type="number"
            min="0"
            defaultValue="0"
            placeholder="0" />
          </div>
          <p>:</p>
          <div className="field">
            <input ref={node=> {
                seconds=node;
              }}
              type="number"
              min="0"
              max="59"
              placeholder="00"
              defaultValue="00" />
          </div>
        </div>
      </div>
      <br/>
      <button className="ui button" type="submit">Add Set</button>
    </form>
  );
};

// Connect call without any argument will 
// not subscribe to the store, but will provide dispatch
const AddSets = connect()(AddSet)

export default AddSets;