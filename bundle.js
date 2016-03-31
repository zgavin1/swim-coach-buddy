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
	
	// // Todo App
	var todo = function todo(state, action) {
	  switch (action.type) {
	    case 'ADD_TODO':
	      return {
	        id: action.id,
	        count: action.count,
	        dist: action.dist,
	        interval: action.interval,
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
	
	// Could include laps later.
	
	var stopWatch = function stopWatch() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? { running: false, time: 0 } : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    case 'INCREMENT_STOPWATCH':
	      return _extends({}, state, {
	        time: state.time + 1
	      });
	    case 'TOGGLE_STOPWATCH':
	      return _extends({}, state, {
	        running: !state.running
	      });
	    case 'RESET_STOPWATCH':
	      return _extends({}, state, {
	        time: 0
	      });
	    default:
	      return state;
	  }
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
	  visibilityFilter: visibilityFilter,
	  stopWatch: stopWatch
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
	//     ),
	//     stopWatch: stopWatch(
	//       state.stopWatch,
	//       action
	//   )
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
	
	//
	//
	//
	
	var StopWatchDisplay = function StopWatchDisplay(_ref2) {
	  var running = _ref2.running;
	  var time = _ref2.time;
	  var onClick = _ref2.onClick;
	  var onRunning = _ref2.onRunning;
	
	  // let intervalId;
	  if (running) {
	    setTimeout(onRunning, 100);
	  }
	
	  var button = React.createElement(
	    'button',
	    {
	      onClick: onClick },
	    running ? "STOP" : "START"
	  );
	
	  return React.createElement(
	    'div',
	    null,
	    React.createElement(
	      'span',
	      null,
	      ' ',
	      time,
	      ' '
	    ),
	    button
	  );
	};
	
	var mapStateToStopWatchProps = function mapStateToStopWatchProps(state) {
	  return {
	    running: state.stopWatch.running,
	    time: state.stopWatch.time
	  };
	};
	
	var mapDispatchToStopWatchProps = function mapDispatchToStopWatchProps(dispatch) {
	  return {
	    onClick: function onClick() {
	      dispatch({
	        type: "TOGGLE_STOPWATCH"
	      });
	    },
	    onRunning: function onRunning() {
	      dispatch({
	        type: "INCREMENT_STOPWATCH"
	      });
	    }
	  };
	};
	
	var StopWatch = connect(mapStateToStopWatchProps, mapDispatchToStopWatchProps)(StopWatchDisplay);
	
	// const Link = ({
	//   active,
	//   children,
	//   onClick
	// }) => {
	//   if (active) {
	//     return <span> {children} </span>
	//   }
	
	//   return (
	//     <a href="#"
	//       onClick={e => {
	//         e.preventDefault();
	//         onClick();
	//       }}
	//     >
	//       {children}
	//     </a>
	//   );
	// };
	
	// const mapStateToLinkProps = (
	//   state,
	//   ownProps
	// ) => {
	//   return {
	//     active: ownProps.filter === state.visibilityFilter
	//   };
	// };
	
	// const mapDispatchToLinkProps = (
	//   dispatch,
	//   ownProps
	// ) => {
	//   return {
	//     onClick: () => {
	//       dispatch({
	//         type: "SET_VISIBILITY_FILTER",
	//         filter: ownProps.filter
	//       });
	//     }
	//   };
	// };
	
	// const FilterLink = connect(
	//   mapStateToLinkProps,
	//   mapDispatchToLinkProps
	// )(Link);
	
	var Todo = function Todo(_ref3) {
	  var onClick = _ref3.onClick;
	  var completed = _ref3.completed;
	  var count = _ref3.count;
	  var dist = _ref3.dist;
	  var interval = _ref3.interval;
	
	
	  return React.createElement(
	    'li',
	    {
	      onClick: onClick,
	      style: {
	        textDecoration: completed ? "line-through" : "none"
	      } },
	    count,
	    ' x ',
	    dist,
	    ' @ ',
	    interval
	  );
	};
	
	var TodoList = function TodoList(_ref4) {
	  var todos = _ref4.todos;
	  var onTodoClick = _ref4.onTodoClick;
	  return React.createElement(
	    'ul',
	    null,
	    todos.reverse().map(function (todo) {
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
	var addTodo = function addTodo(count, dist, interval) {
	  return {
	    type: "ADD_TODO",
	    id: nextTodoId++,
	    count: count,
	    dist: dist,
	    interval: interval
	  };
	};
	
	// gets dispatch using ES6 syntax directly from props
	var AddTodo = function AddTodo(_ref5) {
	  var dispatch = _ref5.dispatch;
	
	  var dist = void 0;
	  var count = void 0;
	  var minutes = void 0;
	  var seconds = void 0;
	
	  return React.createElement(
	    'form',
	    { onSubmit: function onSubmit(e) {
	        e.preventDefault();
	        if (dist.value === "" || count.value === "" || minutes.value === "0" && seconds.value === "00") {
	          return;
	        }
	        var displaySeconds = parseInt(seconds.value) < 10 ? "0" + seconds.value : seconds.value;
	        var displayMinutes = parseInt(minutes.value);
	        if (displayMinutes === 0) {
	          displayMinutes = "";
	        }
	        var displayInterval = minutes.value.slice(minutes.value.length - 2) + ":" + displaySeconds.slice(displaySeconds.length - 2);
	        dispatch(addTodo(count.value, dist.value, displayInterval));
	        document.getElementById('set-form').reset();
	      },
	      id: 'set-form'
	    },
	    React.createElement(
	      'h3',
	      null,
	      'Reps'
	    ),
	    React.createElement('input', { ref: function ref(node) {
	        count = node;
	      },
	      type: 'number',
	      min: '1',
	      max: '100' }),
	    React.createElement(
	      'h3',
	      null,
	      'Distance'
	    ),
	    React.createElement('input', { ref: function ref(node) {
	        dist = node;
	      },
	      type: 'number',
	      min: '25',
	      max: '1000',
	      step: '25' }),
	    React.createElement(
	      'h3',
	      null,
	      'Interval'
	    ),
	    React.createElement('input', { ref: function ref(node) {
	        minutes = node;
	      },
	      type: 'number',
	      min: '0',
	      defaultValue: '0' }),
	    ':',
	    React.createElement('input', { ref: function ref(node) {
	        seconds = node;
	      },
	      type: 'number',
	      min: '0',
	      max: '59',
	      defaultValue: '00' }),
	    React.createElement('input', { type: 'submit', value: 'Add Todo' })
	  );
	};
	
	// Connect call without any argument will
	// not subscribe to the store, but will provide dispatch
	var AddTodos = connect()(AddTodo);
	
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
	    React.createElement(AddTodos, null),
	    React.createElement(VisibleTodoList, null),
	    React.createElement(Footer, null),
	    React.createElement(StopWatch, null)
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

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map