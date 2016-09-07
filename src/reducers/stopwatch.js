import moment from 'moment';

const defaultWatchState = {
  running: false,
  time: 0,
  offset: 0
}

const stopwatch = (
  state = defaultWatchState,
  action
) => {
  switch (action.type) {
    case 'INCREMENT_STOPWATCH':
      return {
        ...state,
        time: moment(),
        // time: state.time + (Date.now - state.offset),
        // offset: action.time
      }
    case 'START_STOPWATCH':
      return {
        ...state,
        // time : 0,
        running: true,
        offset: action.offset
      };
    case 'STOP_STOPWATCH':
      return {
        ...state,
        running: false
      };
    case 'RESET_STOPWATCH':
      return {
        ...state,
        time: 0,
        offset: 0
      };
    default:
      return state;
  } 
}

export default stopwatch