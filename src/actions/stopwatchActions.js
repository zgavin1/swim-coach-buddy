import C from './../constants';


export const startStopwatch = () => ({
   offset: Date.now(),
   type: C.START_STOPWATCH
})

export const stopStopwatch = () => ({
   type: C.STOP_STOPWATCH
})

export const incrementTime = () => ({
   type: C.INCREMENT_STOPWATCH,
   time: Date.now()
})

export const resetStopwatch = () => ({
  type: "RESET_STOPWATCH"
})