import C from './../constants';

export default {
   setVisibilityFilter: (filter) => {
         return {
            type: C.SET_VISIBILITY_FILTER,
            filter: filter
         }
      }
}