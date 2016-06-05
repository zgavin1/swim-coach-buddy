import C from "./../constants";


let nextSetId = 0;

export default {
   addSet: (count, dist, interval) => ({
      type: C.ADD_SET,
      id: nextSetId++,
      count,
      dist,
      interval
   }),

   removeSet: (id) => ({
     type: C.REMOVE_SET,
     id
   }),

   toggleSet: (id) => ({
      type: C.TOGGLE_SET,
      id
   })
}