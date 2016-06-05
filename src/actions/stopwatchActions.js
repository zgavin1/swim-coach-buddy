import C from './../constants';

export default {
   startStopwatch: () => ({
         offset: Date.now(),
         type: C.START_STOPWATCH
   }),

   stopStopwatch: () => ({
         type: C.STOP_STOPWATCH
   }),

   incrementTime: () => ({
         type: C.INCREMENT_STOPWATCH,
         time: Date.now()
   }),

   resetStopwatch: () => ({
        type: "RESET_STOPWATCH"
   })
}