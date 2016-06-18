import test from 'ava';
import createList from 'reducers/createList';
// import * as setActions from 'actions/setActions';

let reducer;
test.before('create reducer', t => {
   reducer = createList('active');
});

test('ids adds a new id', t =>  {
   const prevState = {ids:["abc", "def", "123"]};
   const addIdAction = {
      type: "ADD_SET_SUCCESS",
      response: {
         result: "456"
      }
   };

   const nextIdsState = ["abc", "def", "123", "456"];
   t.not(reducer(prevState, addIdAction).ids, prevState.ids);
   t.deepEqual(reducer(prevState, addIdAction).ids, nextIdsState);
})

test('ids removes an id', t =>  {
   const prevRemoveState = {ids:["abc", "def", "123"]};
   const removeIdAction = {
      type: "REMOVE_SET_SUCCESS",
      response: {
         result: "123"
      }
   };

   const nextRemoveIdsState = ["abc", "def"];
   t.not(reducer(prevRemoveState, removeIdAction).ids, prevRemoveState.ids);
   t.deepEqual(reducer(prevRemoveState, removeIdAction).ids, nextRemoveIdsState);
})

test('ids toggles an id', t =>  {
   const prevToggleState = {
      ids: ["id1", "id2", "id3"]
   };
   const toggleIdAction = {
      type: "TOGGLE_SET_SUCCESS",
      response: {
         result: "id1",
         entities: { // full sets
            sets: {
               id1: {completed: true}
            }
         }
      }
   };

   const nextToggleIdsState = ["id2", "id3"];
   t.not(reducer(prevToggleState, toggleIdAction).ids, prevToggleState.ids);
   t.deepEqual(reducer(prevToggleState, toggleIdAction).ids, nextToggleIdsState);
})

test('errorMessage defaults falsy (null)', t =>  {
   t.falsy(reducer(undefined, {filter: 'active'}).errorMessage);
})

test('errorMessage edits the error message on failure', t =>  {
   const message = "changed error message";
   const errorChangeFailAction = {
      type: "FETCH_SETS_FAILURE",
      filter: 'active',
      message: message
   };

   t.is(reducer(undefined, errorChangeFailAction).errorMessage, message);
})

test('errorMessage resets to falsy (null)', t =>  {
   const prevErrorState = {errorMessage: "old error message"}
   t.falsy(reducer(prevErrorState, {filter: 'active', type: "FETCH_SETS_REQUEST"}).errorMessage);
})

test('isFetching defaults to false', t =>  {
   t.false(reducer(undefined, {filter: 'active'}).isFetching);
})

test('isFetching updates to true on fetch request', t =>  {
   const fetchRequestAction = {
      type: "FETCH_SETS_REQUEST",
      filter: 'active'
   };

   t.true(reducer(undefined, fetchRequestAction).isFetching);
})

test('isFetching resets to false on failure/request', t =>  {
   const message = "failed";
   const fetchRequestFailAction = {
      type: "FETCH_SETS_FAILURE",
      filter: 'active',
      message: message
   };

   t.false(reducer({isFetching: true}, fetchRequestFailAction).isFetching);
})

// test('errorMessage edits the error message on failure', t =>  {
//    const prevToggleState = {
//       ids: ["id1", "id2", "id3"]
//    };
//    const toggleIdAction = {
//       type: "TOGGLE_SET_SUCCESS",
//       response: {
//          result: "id1",
//          entities: { // full sets
//             sets: {
//                id1: {completed: true}
//             }
//          }
//       }
//    };

//    const nextToggleIdsState = ["id2", "id3"];
//    t.not(reducer(prevToggleState, toggleIdAction).ids, prevToggleState.ids);
//    t.deepEqual(reducer(prevToggleState, toggleIdAction).ids, nextToggleIdsState);
// })





// test('toggles the todo', async t => {
//    const prevState = [
//       { id: 1, text: 'foo', completed: false },
//       { id: 2, text: 'bar', completed: false },
//       { id: 3, text: 'baz', completed: false },
//    ];
//    const nextState = createList(prevState, toggleTodo(2));
//    t.deepEqual(nextState, [
//       { id: 1, text: 'foo', completed: false },
//       { id: 2, text: 'bar', completed: true }, // this one should be toggled
//       { id: 3, text: 'baz', completed: false },
//    ]);
// });
