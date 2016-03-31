

// const testAddTodo = () => {
//   const stateBefore = [];
//   const action = {
//     type: "ADD_TODO",
//     id: 0,
//     text: "Learn Redux"
//   };
//   const stateAfter = [
//     {
//       id: 0,
//       text: "learn Redux",
//       completed: false
//     }
//   ];

//   deepFreeze(stateBefore);
//   deepFreeze(action);

//   expect(
//     todos(stateBefore, action)
//   ).toEqual(stateAfter);
// }

// const testToggleTodo2 = () => {
//   const stateBefore = [
//     {
//       id: 0,
//       text: "Learn Redux",
//       completed: false
//     },
//     {
//       id: 1,
//       text: "Go shopping",
//       completed: false
//     }
//   ];

//   const action = {
//     type: "TOGGLE_TODO",
//     id: 1
//   }

//   deepFreeze(action);
//   deepFreeze(stateBefore);

//   const stateAfter = [
//     {
//       id: 0,
//       text: "Learn Redux",
//       completed: false
//     },
//     {
//       id: 1,
//       text: "Go shopping",
//       completed: true
//     }
//   ];

//   expect(
//     todos(stateBefore, action)
//   ).toEqual(stateAfter);

//   console.log("passed second toggle test");
// }

// testToggleTodo2();