// const counter = (state = 0, action) => {
// 	switch (action.type) {
//   	case 'INCREMENT':
// 			return state + 1;
//     case 'DECREMENT':
//     	return state - 1;
//     default:
//     	return state;
//   }
// }

// const Counter = ({ value, onIncrement, onDecrement }) => (
// 	<div>
//   	<h1>{value}</h1>
//   	<button onClick={onIncrement}>+</button>
//     <button onClick={onDecrement}>-</button>
//   </div>
// );

// const { createStore } = Redux;
// const store = createStore(counter);

// const render = () => {
// 	ReactDOM.render(
//   	<Counter
//     	value={store.getState()}
//       onIncrement={() =>
//       	store.dispatch({
//         	type: "INCREMENT"
//         })
//       }
//       onDecrement={() =>
//       	store.dispatch({
//         	type: "DECREMENT"
//         })
//       } />,
//     document.getElementById('root')
//   )
// }

// store.subscribe(render);
// render();



// var HelloWorld = React.createClass({
//   render: function() {
//     return (
//       <p>
//         Hello, <input type="text" placeholder="Your name here" />!
//         It is {this.props.date.toTimeString()}
//       </p>
//     );
//   }
// });

// setInterval(function() {
//   ReactDOM.render(
//     <HelloWorld date={new Date()} />,
//     document.getElementById('root')
//   );
// }, 500);


























// // Todo App
const toggleTodo = (todo) => {
  return Object.assign({}, todo, {
    completed: !todo.completed
  });
}

const testToggleTodo1 = () => {
  const todoBefore = {
    id: 0,
    text: 'Learn Redux',
    completed: false
  };
  const todoAfter = {
    id: 0,
    text: "Learn Redux",
    completed: true
  };

  deepFreeze(todoBefore);

  expect(
    toggleTodo(todoBefore)
  ).toEqual(todoAfter);
}

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return todo
      }

      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state
  }
};


const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

const visibilityFilter = (
  state = "SHOW_ALL",
  action
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  };
};

const { combineReducers } = Redux;


// rewriting #combinereducers

// const combineReducers = (reducers) => {
//   return (state = {}, action) => {
//     return Object.keys(reducers).reduce(
//       (nextState, key) => {
//         nextState[key] = reducers[key]()
//           state[key],
//           action
//         );
//         return nextState;
//       };
//       {}
//     );
//   };
// };

// Keys and values have the same name
// so ES6 object literal notation allows
// this syntax
const todoApp = combineReducers({
  todos,
  visibilityFilter
});

// const todoApp = (state = {}, action) => {
//   return {
//     todos: todos(
//       state.todos,
//       action
//     ),
//     visibilityFilter: visibilityFilter(
//       state.visibilityFilter,
//       action
//     )
//   };
// };

const { createStore } = Redux;
const store = createStore(todoApp);

const { Component } = React;

let nextTodoId = 0;
class TodoApp extends Component {
  render() {
    return (
      <div>
        <button onClick={() => {
          store.dispatch({
            type: 'ADD_TODO',
            text: 'Test',
            id: nextTodoId++
          });
        }}>Add Todo</button>
        <ul>
          {this.props.todos.map(todo=> 
            <li key={todo.id}>
              {todo..text}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

const render = () => {
  ReactDOM.render(
    <TodoApp 
      todos={ store.getState().todos }/>,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();

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
















// // 



















// // 



















// // 



















// // 