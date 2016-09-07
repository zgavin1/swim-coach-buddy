import C from './../constants';
import moment from 'moment';

export const startStopwatch = () => ({
   offset: moment(),
   type: C.START_STOPWATCH
})

export const stopStopwatch = () => ({
   type: C.STOP_STOPWATCH
})

export const incrementTime = () => ({
   type: C.INCREMENT_STOPWATCH
})

export const resetStopwatch = () => ({
  type: "RESET_STOPWATCH"
})