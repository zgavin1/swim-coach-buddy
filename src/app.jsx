// // Todo App
const todo = (
  state,
  action
) => {
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
        return state
      }

      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state
  }
};


const todos = (
  state = [],
  action
) => {
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
  };
  
  return state;
};


// Could include laps later.

const stopWatch = (
  state = {running: false, time: 0},
  action
) => {
  switch (action.type) {
    case 'INCREMENT_STOPWATCH':
      return {
        ...state,
        time: state.time+1
      }
    case 'TOGGLE_STOPWATCH':
      return {
        ...state,
        running: !state.running,
      };
    case 'RESET_STOPWATCH':
      return {
        ...state,
        time: 0
      };
    default:
      return state;
  } 
}

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
  visibilityFilter,
  stopWatch
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
const { Component } = React;
const { connect } = ReactRedux;

const Link = ({
  active,
  children,
  onClick
}) => {
  if (active) {
    return <span> {children} </span>
  }

  return (
    <a href="#"
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
};

const mapStateToLinkProps = (
  state,
  ownProps
) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};

const mapDispatchToLinkProps = (
  dispatch,
  ownProps
) => {
  return {
    onClick: () => {
      dispatch({
        type: "SET_VISIBILITY_FILTER",
        filter: ownProps.filter
      });
    }
  };
};

const FilterLink = connect(
  mapStateToLinkProps,
  mapDispatchToLinkProps
)(Link);

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

const Footer = () => (
  <p>
    Show:
    {"  "}
    <FilterLink filter="SHOW_ALL" >
      All
    </FilterLink>
    {"  "}
    <FilterLink filter="SHOW_ACTIVE" >
      Active
    </FilterLink>
    {"  "}
    <FilterLink filter="SHOW_COMPLETED" >
      Completed
    </FilterLink>
  </p>
)

// 
// 
//



const StopWatchDisplay = ({
  running,
  time,
  onClick,
  onRunning
}) => {
  // let intervalId;
  if (running) {
    setTimeout(onRunning, 100);
  }

  let button = 
    <button
      onClick={onClick}>
      { (running ? "STOP" : "START") }
    </button>;

  return (
    <div>
      <span> {time} </span>
      { button }
    </div>
  );
};

const mapStateToStopWatchProps = (
  state
) => {
  return {
    running: state.stopWatch.running,
    time: state.stopWatch.time
  }
}

const mapDispatchToStopWatchProps = (
  dispatch
) => {
  return {
    onClick: () => {
      dispatch({
        type: "TOGGLE_STOPWATCH"
      })
    },
    onRunning: () => {
      dispatch({
        type: "INCREMENT_STOPWATCH"
      })
    }
  };
};

const StopWatch = connect(
  mapStateToStopWatchProps,
  mapDispatchToStopWatchProps
)(StopWatchDisplay);


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




const Todo = ({
  onClick,
  completed,
  count,
  dist,
  interval
}) => {

  return (
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? "line-through" : "none"
      }}>
      {count} x {dist} @ {interval}
    </li>
  )
}

const TodoList = ({
  todos,
  onTodoClick
}) => (
  <ul>
    {todos.reverse().map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)} />
    )}
  </ul>  
)

let nextTodoId = 0;

// This is called abstraction the action creator
// It is common Redux pattern, could be done 
// in every single place where a larger function
// or class dispatches an action.
const addTodo = (count, dist, interval) => {
  return {
    type: "ADD_TODO",
    id: nextTodoId++,
    count,
    dist,
    interval
  };
};

// gets dispatch using ES6 syntax directly from props
let AddTodo = ({ dispatch }) => {
  let dist;
  let count;
  let minutes;
  let seconds;
  
  return (
    <form onSubmit={(e) => {
        e.preventDefault(); 
        if (dist.value === "" || count.value === "" || (minutes.value === "0" && seconds.value === "00")) {
          return;
        }
        const displaySeconds = parseInt(seconds.value) < 10 ? "0" + seconds.value : seconds.value;
        let displayMinutes = parseInt(minutes.value);
        if (displayMinutes === 0) {
          displayMinutes = "";
        }
        const displayInterval = minutes.value.slice(minutes.value.length - 2) + ":" + displaySeconds.slice(displaySeconds.length - 2);
        dispatch(addTodo(count.value, dist.value, displayInterval));
        document.getElementById('set-form').reset();
      }}
      id="set-form"
    >
      <h3>Reps</h3>
      <input ref={node=> {
          count=node;
        }}
        type="number"
        min="1"
        max="100" />
      <h3>Distance</h3>
      <input ref={node=> {
          dist = node;
         }}
         type="number"
         min="25"
         max="1000"
         step="25" />
      <h3>Interval</h3>
      <input ref={node=> {
          minutes=node;
        }}
        type="number"
        min="0"
        defaultValue="0" />:
      <input ref={node=> {
          seconds=node;
        }}
        type="number"
        min="0"
        max="59"
        defaultValue="00" />
      <input type="submit" value="Add Todo" />
    </form>
  );
};

// Connect call without any argument will 
// not subscribe to the store, but will provide dispatch
const AddTodos = connect()(AddTodo)

// AddTodo = connect(
//   state => {
//     return {};
//   },
//   dispatch => {
//     return { dispatch };
//   }
// )(addTodo);

const getVisibleTodos = (
  todos,
  filter
) => {
  switch (filter) {
    case "SHOW":
      return todos;
    case "SHOW_COMPLETED":
      return todos.filter(
        t => t.completed
      );
    case "SHOW_ACTIVE":
      return todos.filter(
        t => !t.completed
      );
    default:
      return todos;
  }
}

const MapStateToTodoListProps = (state) => {
  return {
    todos: getVisibleTodos(
      state.todos,
      state.visibilityFilter
    )
  };
};

const mapDispatchToTodoListProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch({
        type: "TOGGLE_TODO",
        id
      })
    }
  };
};

// Connect function does literally everything in the
// class we already wrote "VisbleTodoList" if we pass
// in both mapping functions from above

const VisibleTodoList = connect(
  MapStateToTodoListProps,
  mapDispatchToTodoListProps
)(TodoList);



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





const TodoApp = () => (
  <div>
    <AddTodos />
    <VisibleTodoList />
    <Footer />
    <StopWatch />
  </div>
);


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

const { Provider } = ReactRedux;
const { createStore } = Redux;

ReactDOM.render(
  <Provider store={createStore(todoApp)}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
