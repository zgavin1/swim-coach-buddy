// import throttle from 'lodash/throttle';
import { createStore } from 'redux';
// import { loadState, saveState } from './localStorage';
import rootReducer from './reducers/rootReducer';


const addLoggingToDispatch = (store) => {
   const rawDispatch = store.dispatch;
   if (!console.group) {
      return rawDispatch;
   }

   return (action) => {
      console.group(action.type);
      console.log('%c prev state', 'color: gray', store.getState());
      console.log('%c action', 'color: blue', action);
      const returnValue = rawDispatch(action);
      console.log('%c next state', 'color : green', store.getState());
      console.groupEnd(action.type);
   }
}

// const persistedState = {
//    sets: [{
//       id: "0",
//       count: "1",
//       dist: "25",
//       interval: "2:00",
//       completed: "false"
//    }]
// }
const configureStore = () => {
   // const persistedState = loadState();

   // second argument to createStore
   // can be persisted state (if you want)
   // would need to improve method for assigning
   // id's to sets

   const store = createStore(
      rootReducer //,
      // persistedState
   );

   if (process.env.NODE_ENV !== 'production') {
      store.dispatch = addLoggingToDispatch(store);
   }

   // store.subscribe(throttle(() => {
   //    saveState({
   //       sets: store.getState().sets
   //    });
   // }, 1000));
   
   return store;
}

export default configureStore