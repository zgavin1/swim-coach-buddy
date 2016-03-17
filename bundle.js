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

	const counter = (state = 0, action) => {
	  switch (action.type) {
	    case 'INCREMENT':
	      return state + 1;
	    case 'DECREMENT':
	      return state - 1;
	    default:
	      return state;
	  }
	};
	
	const Counter = ({ value, onIncrement, onDecrement }) => React.createElement(
	  'div',
	  null,
	  React.createElement(
	    'h1',
	    null,
	    value
	  ),
	  React.createElement(
	    'button',
	    { onClick: onIncrement },
	    '+'
	  ),
	  React.createElement(
	    'button',
	    { onClick: onDecrement },
	    '-'
	  )
	);
	
	const { createStore } = Redux;
	const store = createStore(counter);
	
	const render = () => {
	  ReactDOM.render(React.createElement(Counter, {
	    value: store.getState(),
	    onIncrement: () => store.dispatch({
	      type: "INCREMENT"
	    }),
	    onDecrement: () => store.dispatch({
	      type: "DECREMENT"
	    }) }), document.getElementById('root'));
	};
	
	store.subscribe(render);
	render();
	
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

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map