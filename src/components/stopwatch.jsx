import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

const StopWatchDisplay = ({
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
      onClick={running ? stop : start} >
      {(running ? "STOP" : "START")}
    </button>;
  const resetButton =
    <button
      onClick={resetTime} >
      RESET
    </button>

  return (
    <div>
      <span> {displayTime} </span>
      { startButton } { resetButton }
    </div>
  );
};

const mapStateToStopWatchProps = (
  state
) => {
  return {
    running: state.stopWatch.running,
    time: state.stopWatch.time,
    offset: state.stopWatch.offset
  }
}

const mapDispatchToStopWatchProps = (
  dispatch
) => {
  return {
    start: () => {
      dispatch({
        type: "START_STOPWATCH",
        offset: Date.now()
      })
    },
    stop: () => {
      dispatch({
        type: "STOP_STOPWATCH",
      })
    },
    onRunning: () => {
      dispatch({
        type: "INCREMENT_STOPWATCH",
        time: Date.now()
      });
    },
    resetTime: () => {
      dispatch({
        type: "RESET_STOPWATCH"
      })
    }
  };
};

const StopWatch = connect(
  mapStateToStopWatchProps,
  mapDispatchToStopWatchProps
)(StopWatchDisplay);

export default StopWatch;