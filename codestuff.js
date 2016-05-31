codestuff.js// // Set App

// const set = (
//   state,
//   action
// ) => {
//   switch (action.type) {
//     case 'ADD_SET':
//       return {
//         id: action.id,
//         count: action.count,
//         dist: action.dist,
//         interval: action.interval,
//         completed: false
//       };
//     case 'TOGGLE_SET':
//       if (state.id !== action.id) {
//         return state
//       }

//       return {
//         ...state,
//         completed: !state.completed
//       };
//     default:
//       return state
//   }
// };


// const sets = (
//   state = [],
//   action
// ) => {
//   switch (action.type) {
//     case 'ADD_SET':
//       return [
//         ...state,
//         set(undefined, action)
//       ];
//     case 'TOGGLE_SET':
//       return state.map(s => set(s, action));
//     default:
//       return state;
//   }
// };

// const visibilityFilter = (
//   state = "SHOW_ALL",
//   action
// ) => {
//   switch (action.type) {
//     case 'SET_VISIBILITY_FILTER':
//       return action.filter;
//   };
  
//   return state;
// };


// // Could include laps later.

// const defaultWatchState = {
//   running: false,
//   time: 0,
//   offset: 0
// }

// const stopWatch = (
//   state = defaultWatchState,
//   action
// ) => {
//   switch (action.type) {
//     case 'INCREMENT_STOPWATCH':
//       return {
//         ...state,
//         time: state.time + (action.time - state.offset),
//         offset: action.time
//       }
//     case 'START_STOPWATCH':
//       return {
//         ...state,
//         running: true,
//         offset: action.offset
//       };
//     case 'STOP_STOPWATCH':
//       return {
//         ...state,
//         running: false
//       };
//     case 'RESET_STOPWATCH':
//       return {
//         ...state,
//         time: 0,
//         offset: 0
//       };
//     default:
//       return state;
//   } 
// }

// const { combineReducers } = Redux;


// // rewriting #combinereducers

// // const combineReducers = (reducers) => {
// //   return (state = {}, action) => {
// //     return Object.keys(reducers).reduce(
// //       (nextState, key) => {
// //         nextState[key] = reducers[key]()
// //           state[key],
// //           action
// //         );
// //         return nextState;
// //       };
// //       {}
// //     );
// //   };
// // };

// const setApp = combineReducers({
//   sets,
//   visibilityFilter,
//   stopWatch
// });

// const { connect } = ReactRedux;

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

// const Footer = () => (
//   <p>
//     Show:
//     {"  "}
//     <FilterLink filter="SHOW_ALL" >
//       All
//     </FilterLink>
//     {"  "}
//     <FilterLink filter="SHOW_ACTIVE" >
//       Active
//     </FilterLink>
//     {"  "}
//     <FilterLink filter="SHOW_COMPLETED" >
//       Completed
//     </FilterLink>
//   </p>
// )

// 
// 
//
// var moment = require('moment');

// const StopWatchDisplay = ({
//   running,
//   time,
//   offset,
//   start,
//   stop,
//   onRunning,
//   resetTime
// }) => {
//   // let intervalId;
//   if (running) {
//     setTimeout(onRunning, 10);
//   }

//   let displayTime = moment(time).format("mm:ss.SS")

//   const startButton = 
//     <button
//       onClick={running ? stop : start} >
//       {(running ? "STOP" : "START")}
//     </button>;
//   const resetButton =
//     <button
//       onClick={resetTime} >
//       RESET
//     </button>

//   return (
//     <div>
//       <span> {displayTime} </span>
//       { startButton } { resetButton }
//     </div>
//   );
// };

// const mapStateToStopWatchProps = (
//   state
// ) => {
//   return {
//     running: state.stopWatch.running,
//     time: state.stopWatch.time,
//     offset: state.stopWatch.offset
//   }
// }

// const mapDispatchToStopWatchProps = (
//   dispatch
// ) => {
//   return {
//     start: () => {
//       dispatch({
//         type: "START_STOPWATCH",
//         offset: Date.now()
//       })
//     },
//     stop: () => {
//       dispatch({
//         type: "STOP_STOPWATCH",
//       })
//     },
//     onRunning: () => {
//       dispatch({
//         type: "INCREMENT_STOPWATCH",
//         time: Date.now()
//       });
//     },
//     resetTime: () => {
//       dispatch({
//         type: "RESET_STOPWATCH"
//       })
//     }
//   };
// };

// const StopWatch = connect(
//   mapStateToStopWatchProps,
//   mapDispatchToStopWatchProps
// )(StopWatchDisplay);


// const Set = ({
//   onClick,
//   completed,
//   count,
//   dist,
//   interval
// }) => {

//   return (
//     <li
//       onClick={onClick}
//       style={{
//         textDecoration: completed ? "line-through" : "none"
//       }} >
//       {count} x {dist} @ {interval}
//     </li>
//   )
// }

// const SetList = ({
//   sets,
//   onSetClick
// }) => (
//   <ul>
//     {sets.reverse().map(set =>
//       <Set
//         key={set.id}
//         {...set}
//         onClick={() => onSetClick(set.id)} />
//     )}
//   </ul>  
// )

// const getVisibleSets = (
//   sets,
//   filter
// ) => {
//   switch (filter) {
//     case "SHOW_ALL":
//       return sets;
//     case "SHOW_COMPLETED":
//       return sets.filter(
//         s => s.completed
//       );
//     case "SHOW_ACTIVE":
//       return sets.filter(
//         s => !s.completed
//       );
//     default:
//       return sets;
//   }
// }

// const mapStateToSetListProps = (state) => {
//   return {
//     sets: getVisibleSets(
//       state.sets,
//       state.visibilityFilter
//     )
//   };
// };

// const mapDispatchToSetListProps = (dispatch) => {
//   return {
//     onSetClick: (id) => {
//       dispatch({
//         type: "TOGGLE_SET",
//         id
//       })
//     }
//   };
// };

// const VisibleSetList = connect(
//   mapStateToSetListProps,
//   mapDispatchToSetListProps
// )(SetList);

// let nextSetId = 0;

// This is called abstracting the action creator
// It is common Redux pattern, could be done 
// in every single place where a larger function
// or class dispatches an action.

// const addSet = (count, dist, interval) => {
//   return {
//     type: "ADD_SET",
//     id: nextSetId++,
//     count,
//     dist,
//     interval
//   };
// };

// // gets dispatch using ES6 syntax directly from props
// let AddSet = ({ dispatch }) => {
//   let dist;
//   let count;
//   let minutes;
//   let seconds;
  
//   return (
//     <form onSubmit={(e) => {
//         e.preventDefault(); 
//         if (dist.value === "" || count.value === "" || (minutes.value === "0" && seconds.value === "00")) {
//           return;
//         }
//         const displaySeconds = parseInt(seconds.value) < 10 ? "0" + seconds.value : seconds.value;
//         let displayMinutes = parseInt(minutes.value);
//         if (displayMinutes === 0) {
//           displayMinutes = "";
//         }
//         const displayInterval = minutes.value.slice(minutes.value.length - 2) + ":" + displaySeconds.slice(displaySeconds.length - 2);
//         dispatch(addSet(count.value, dist.value, displayInterval));
//         document.getElementById('set-form').reset();
//       }}
//       id="set-form"
//     >
//       <h3>Reps</h3>
//       <input ref={node=> {
//           count=node;
//         }}
//         type="number"
//         min="1"
//         max="100" />
//       <h3>Distance</h3>
//       <input ref={node=> {
//           dist = node;
//          }}
//          type="number"
//          min="25"
//          max="1000"
//          step="25" />
//       <h3>Interval</h3>
//       <input ref={node=> {
//           minutes=node;
//         }}
//         type="number"
//         min="0"
//         defaultValue="0" />:
//       <input ref={node=> {
//           seconds=node;
//         }}
//         type="number"
//         min="0"
//         max="59"
//         defaultValue="00" />
//       <input type="submit" value="Add Set" />
//     </form>
//   );
// };

// // Connect call without any argument will 
// // not subscribe to the store, but will provide dispatch
// const AddSets = connect()(AddSet)

// // AddTodo = connect(
// //   state => {
// //     return {};
// //   },
// //   dispatch => {
// //     return { dispatch };
// //   }
// // )(addTodo);



// const SetApp = () => (
//   <div>
//     <AddSets />
//     <VisibleSetList />
//     <Footer />
//     <StopWatch />
//   </div>
// );


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