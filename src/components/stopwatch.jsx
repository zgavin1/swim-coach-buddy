import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { startStopwatch, stopStopwatch,
    incrementTime, resetStopwatch } from './../actions/stopwatchActions';

const StopwatchDisplay = ({
  running,
  time,
  offset,
  start,
  stop,
  onRunning,
  resetTime
}) => {
  // let intervalId;
  if (running) {
    setTimeout(onRunning, 10);
  }

  let displayTime = moment(time).format("mm:ss.SS")

  const startButton = 
    <button
      className="ui button"
      onClick={running ? stop : start} >
      {(running ? "STOP" : "START")}
    </button>;
  const resetButton =
    <button
      className="ui button"
      onClick={resetTime} >
      RESET
    </button>

  return (
    <div>
      <span className="time-display"> {displayTime} </span>
      <br />
      { startButton } { resetButton }
    </div>
  );
};

const mapStateToStopWatchProps = (
  state
) => ({
  running: state.stopwatch.running,
  time: state.stopwatch.time,
  offset: state.stopwatch.offset
})

// const mapDispatchToStopWatchProps = (
//   dispatch
// ) => ({
//   start() {
//     dispatch(startStopwatch());
//   },
//   stop() {
//     dispatch(stopStopwatch())
//   },
//   onRunning() {
//     dispatch(incrementTime());
//   },
//   resetTime() {
//     dispatch(resetStopwatch())
//   }
// });

const Stopwatch = connect(
  mapStateToStopWatchProps,
  { 
    start: startStopwatch,
    stop: stopStopwatch,
    onRunning: incrementTime,
    resetTime: resetStopwatch
  }
)(StopwatchDisplay);

export default Stopwatch;