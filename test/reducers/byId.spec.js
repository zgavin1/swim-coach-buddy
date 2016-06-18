import test from 'ava';
import byId from 'reducers/byId';

test('defaults to empty object', t => {
   t.deepEqual(byId(undefined, {}), {});
})

test('defaults to previous state if no action response', t => {
   const prevState = {1: "first", 2: "second"};
   t.deepEqual(byId(prevState, {}), prevState);
})

test('adds the sets from the action response entities to state', t => {
   const setsToAdd = {
         id1: {id: 1, name: "set1"},
         id2: {id: 2, name: "set2"}
      }
   const addSetsAction = {
      type: "ADD_SETS_SUCCESS",
      response: {
         entities: {
            sets: setsToAdd
         }
      }
   };
   t.deepEqual(byId(undefined, addSetsAction), setsToAdd);
})

// Need test for removing a set
// reminder to refactor byId to handle this,
// probably createLists reducer as well.

