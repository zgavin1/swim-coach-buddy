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

const testToggleTodo = () => {
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


const todos = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if (todo.id !== action.id) {
          return todo
        }

        return {
          ...todo,
          completed: !todo.completed
        };
      });
    default:
      return state;
  }
};

const testAddTodo = () => {
  const stateBefore = [];
  const action = {
    type: "ADD_TODO",
    id: 0,
    text: "Learn Redux"
  };
  const stateAfter = [
    {
      id: 0,
      text: "learn Redux",
      completed: false
    }
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    todos(stateBefore, action)
  ).toEqual(stateAfter);
}

testAddTodo();

const testToggleTodo = () => {
  const stateBefore = [
    {
      id: 0,
      text: "Learn Redux",
      completed: false
    },
    {
      id: 1,
      text: "Go shopping",
      completed: false
    }
  ];

  const action = {
    type: "TOGGLE_TODO",
    id: 1
  }

  deepFreeze(action);
  deepFreeze(stateBefore);

  const stateAfter = [
    {
      id: 0,
      text: "Learn Redux",
      completed: false
    },
    {
      id: 1,
      text: "Go shopping",
      completed: true
    }
  ];

  expect(
    )
}
















// // 



















// // 



















// // 



















// // 