import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import actions from './../actions/stopwatchActions';

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
  running: state.stopWatch.running,
  time: state.stopWatch.time,
  offset: state.stopWatch.offset
})

const mapDispatchToStopWatchProps = (
  dispatch
) => ({
  start() {
    dispatch(actions.startStopwatch());
  },
  stop() {
    dispatch(actions.stopStopwatch())
  },
  onRunning() {
    dispatch(actions.incrementTime());
  },
  resetTime() {
    dispatch(actions.resetStopwatch())
  }
});

const StopWatch = connect(
  mapStateToStopWatchProps,
  mapDispatchToStopWatchProps
)(StopWatchDisplay);

export default StopWatch;