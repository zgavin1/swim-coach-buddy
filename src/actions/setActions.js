import C from "./../constants";


let nextSetId = 0;

export default {
   addSet: (count, dist, interval) => {
      return {
         type: C.ADD_SET,
         id: nextSetId++,
         count,
         dist,
         interval
      };
   },
   
   removeSet: (id) => {
      return {
        type: C.REMOVE_SET,
        id
      }
   },

   toggleSet: (id) => {
      return {
         type: C.TOGGLE_SET,
         id
      }
   }
}