/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
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
	var todo = function todo(state, action) {
	  switch (action.type) {
	    case 'ADD_TODO':
	      return {
	        id: action.id,
	        text: action.text,
	        completed: false
	      };
	    case 'TOGGLE_TODO':
	      if (state.id !== action.id) {
	        return state;
	      }
	
	      return _extends({}, state, {
	        completed: !state.completed
	      });
	    default:
	      return state;
	  }
	};
	
	var todos = function todos() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    case 'ADD_TODO':
	      return [].concat(_toConsumableArray(state), [todo(undefined, action)]);
	    case 'TOGGLE_TODO':
	      return state.map(function (t) {
	        return todo(t, action);
	      });
	    default:
	      return state;
	  }
	};
	
	var visibilityFilter = function visibilityFilter() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? "SHOW_ALL" : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    case 'SET_VISIBILITY_FILTER':
	      return action.filter;
	  };
	
	  return state;
	};
	
	var _Redux = Redux;
	var combineReducers = _Redux.combineReducers;
	
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
	
	var todoApp = combineReducers({
	  todos: todos,
	  visibilityFilter: visibilityFilter
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
	var _React = React;
	var Component = _React.Component;
	var _ReactRedux = ReactRedux;
	var connect = _ReactRedux.connect;
	
	
	var Link = function Link(_ref) {
	  var active = _ref.active;
	  var children = _ref.children;
	  var _onClick = _ref.onClick;
	
	  if (active) {
	    return React.createElement(
	      'span',
	      null,
	      ' ',
	      children,
	      ' '
	    );
	  }
	
	  return React.createElement(
	    'a',
	    { href: '#',
	      onClick: function onClick(e) {
	        e.preventDefault();
	        _onClick();
	      }
	    },
	    children
	  );
	};
	
	var mapStateToLinkProps = function mapStateToLinkProps(state, ownProps) {
	  return {
	    active: ownProps.filter === state.visibilityFilter
	  };
	};
	
	var mapDispatchToLinkProps = function mapDispatchToLinkProps(dispatch, ownProps) {
	  return {
	    onClick: function onClick() {
	      dispatch({
	        type: "SET_VISIBILITY_FILTER",
	        filter: ownProps.filter
	      });
	    }
	  };
	};
	
	var FilterLink = connect(mapStateToLinkProps, mapDispatchToLinkProps)(Link);
	
	// class FilterLink extends Component {
	//   componentDidMount() {
	//     const { store } = this.context;
	//     this.unsubscribe = store.subscribe(() =>
	//       this.forceUpdate()
	//     );
	//   }
	
	//   componentWillUnmount() {
	//     this.unsubscribe();
	//   }
	
	//   render() {
	//     const props = this.props;
	//     const { store } = this.context;
	//     const state = store.getState();
	
	//     return (
	//       <Link
	//         active={
	//           props.filter === state.visibilityFilter
	//         }
	//         onClick={() =>
	//           store.dispatch({
	//             type: "SET_VISIBILITY_FILTER",
	//             filter: props.filter
	//           })
	//         }
	//       > {props.children}
	//       </Link>
	//     );
	//   }
	// }
	// FilterLink.contextTypes = {
	//   store: React.PropTypes.object
	// };
	
	var Footer = function Footer() {
	  return React.createElement(
	    'p',
	    null,
	    'Show:',
	    "  ",
	    React.createElement(
	      FilterLink,
	      { filter: 'SHOW_ALL' },
	      'All'
	    ),
	    "  ",
	    React.createElement(
	      FilterLink,
	      { filter: 'SHOW_ACTIVE' },
	      'Active'
	    ),
	    "  ",
	    React.createElement(
	      FilterLink,
	      { filter: 'SHOW_COMPLETED' },
	      'Completed'
	    )
	  );
	};
	
	var Todo = function Todo(_ref2) {
	  var onClick = _ref2.onClick;
	  var completed = _ref2.completed;
	  var text = _ref2.text;
	  return React.createElement(
	    'li',
	    {
	      onClick: onClick,
	      style: {
	        textDecoration: completed ? "line-through" : "none"
	      } },
	    text
	  );
	};
	
	var TodoList = function TodoList(_ref3) {
	  var todos = _ref3.todos;
	  var onTodoClick = _ref3.onTodoClick;
	  return React.createElement(
	    'ul',
	    null,
	    todos.map(function (todo) {
	      return React.createElement(Todo, _extends({
	        key: todo.id
	      }, todo, {
	        onClick: function onClick() {
	          return onTodoClick(todo.id);
	        } }));
	    })
	  );
	};
	
	var nextTodoId = 0;
	
	// This is called abstraction the action creator
	// It is common Redux pattern, could be done
	// in every single place where a larger function
	// or class dispatches an action.
	var addTodo = function addTodo(text) {
	  return {
	    type: "ADD_TODO",
	    id: nextTodoId++,
	    text: text
	  };
	};
	
	// gets dispatch using ES6 syntax directly from props
	var AddTodo = function AddTodo(_ref4) {
	  var dispatch = _ref4.dispatch;
	
	  var input = void 0;
	
	  return React.createElement(
	    'div',
	    null,
	    React.createElement('input', { ref: function ref(node) {
	        input = node;
	      } }),
	    React.createElement(
	      'button',
	      { onClick: function onClick() {
	          dispatch(addTodo(input.value));
	          input.value = '';
	        } },
	      'Add Todo'
	    )
	  );
	};
	
	// Connect call without any argument will
	// not subscribe to the store, but will provide dispatch
	AddTodo = connect()(AddTodo);
	
	// AddTodo = connect(
	//   state => {
	//     return {};
	//   },
	//   dispatch => {
	//     return { dispatch };
	//   }
	// )(addTodo);
	
	var getVisibleTodos = function getVisibleTodos(todos, filter) {
	  switch (filter) {
	    case "SHOW":
	      return todos;
	    case "SHOW_COMPLETED":
	      return todos.filter(function (t) {
	        return t.completed;
	      });
	    case "SHOW_ACTIVE":
	      return todos.filter(function (t) {
	        return !t.completed;
	      });
	    default:
	      return todos;
	  }
	};
	
	var MapStateToTodoListProps = function MapStateToTodoListProps(state) {
	  return {
	    todos: getVisibleTodos(state.todos, state.visibilityFilter)
	  };
	};
	
	var mapDispatchToTodoListProps = function mapDispatchToTodoListProps(dispatch) {
	  return {
	    onTodoClick: function onTodoClick(id) {
	      dispatch({
	        type: "TOGGLE_TODO",
	        id: id
	      });
	    }
	  };
	};
	
	// Connect function does literally everything in the
	// class we already wrote "VisbleTodoList" if we pass
	// in both mapping functions from above
	
	var VisibleTodoList = connect(MapStateToTodoListProps, mapDispatchToTodoListProps)(TodoList);
	
	// class VisibleTodoList extends Component {
	//   componentDidMount() {
	//     const { store } = this.context;
	//     this.unsubscribe = store.subscribe(() =>
	//       this.forceUpdate()
	//     );
	//   }
	
	//   componentWillUnmount() {
	//     this.unsubscribe();
	//   }
	
	//   render() {
	//     const props = this.props;
	//     const { store } = this.context;
	//     const state = store.getState();
	
	//     return (
	//       <TodoList
	//         todos={
	
	//         }
	//         onTodoClick={id =>
	
	//         } />
	//     );
	//   }
	// }
	// VisibleTodoList.contextTypes = {
	//   store: React.PropTypes.object
	// };
	
	var TodoApp = function TodoApp() {
	  return React.createElement(
	    'div',
	    null,
	    React.createElement(AddTodo, null),
	    React.createElement(VisibleTodoList, null),
	    React.createElement(Footer, null)
	  );
	};
	
	// Build Provider classs specifically for
	// dependency injection of the store. Context
	// typically goes against the React principle of explicit
	// data flow, creating a "wormhole" for the data
	// class Provider extends Component {
	//   getChildContext() {
	//     return {
	//       store: this.props.store
	//     };
	//   }
	
	//   render() {
	//     return this.props.children;
	//   }
	// }
	// Provider.childContextTypes = {
	//   store: React.PropTypes.object
	// };
	
	var _ReactRedux2 = ReactRedux;
	var Provider = _ReactRedux2.Provider;
	var _Redux2 = Redux;
	var createStore = _Redux2.createStore;
	
	
	ReactDOM.render(React.createElement(
	  Provider,
	  { store: createStore(todoApp) },
	  React.createElement(TodoApp, null)
	), document.getElementById('root'));
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

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map