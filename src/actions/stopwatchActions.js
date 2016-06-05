import C from './../constants';

export default {
   startStopwatch: () => {
      return {
         offset: Date.now(),
         type: C.START_STOPWATCH
      }
   },

   stopStopwatch: () => {
      return {
         type: C.STOP_STOPWATCH
      }
   },

   incrementTime: () => {
      return {
         type: C.INCREMENT_STOPWATCH,
         time: Date.now()
      }
   },

   resetStopwatch: () => {
      return {
        type: "RESET_STOPWATCH"
      }
   }
}