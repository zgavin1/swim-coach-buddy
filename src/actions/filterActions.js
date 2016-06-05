import C from './../constants';

export default {
   setVisibilityFilter: (filter) => ({
      type: C.SET_VISIBILITY_FILTER,
      filter: filter
   })
}