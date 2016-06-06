import C from "./../constants";
import { v4 } from 'node-uuid';


// let nextSetId = 0;
// previous line will initialize to zero on every refresh
// if im persisting state this becomes an issue

// DA's egghead tutorial suggests using the module 'node-uuid'
// method #v4 from uuid builds a unique id every time 
export default {
   addSet: (count, dist, interval) => ({
      type: C.ADD_SET,
      id: v4(),
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