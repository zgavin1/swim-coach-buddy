// import throttle from 'lodash/throttle';
import { createStore } from 'redux';
// import { loadState, saveState } from './localStorage';
import rootReducer from './reducers/rootReducer';


const logger = (store) => (next) => {
   if (!console.group) {
      return next;
   }

   return (action) => {
      console.group(action.type);
      console.log('%c prev state', 'color: gray', store.getState());
      console.log('%c action', 'color: blue', action);
      const returnValue = next(action);
      console.log('%c next state', 'color : green', store.getState());
      console.groupEnd(action.type);
   };
};

// TODO:
// should maybe understand this a little better
// promises, store.dispatch. video 16 on egghead
const promise = (store) => (next) => (action) => {
   if (typeof action.then === 'function') {
      return action.then(next);
   }
   return next(action);
};

// const persistedState = {
//    sets: [{
//       id: "0",
//       count: "1",
//       dist: "25",
//       interval: "2:00",
//       completed: "false"
//    }]
// }

const wrapDispatchWithMiddlewares = (store, middlewares) => {
   middlewares.slice().reverse().forEach(middlewares => {
      store.dispatch = middleware(store)(store.dispatch);
   })
}

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
   const middlewares = [promise];

   if (process.env.NODE_ENV !== 'production') {
      middlewares.push(logger);
   }
   // store.subscribe(throttle(() => {
   //    saveState({
   //       sets: store.getState().sets
   //    });
   // }, 1000));

   wrapDispatchWithMiddlewares(store, middlewares);
   
   return store;
}

export default configureStore