// import throttle from 'lodash/throttle';
import { createStore, applyMiddleware } from 'redux';
// import { loadState, saveState } from './localStorage';
import rootReducer from './reducers';
import promise from 'redux-promise';
import createLogger from 'redux-logger'

// const logger = (store) => (next) => {
//    if (!console.group) {
//       return next;
//    }

//    return (action) => {
//       console.group(action.type);
//       console.log('%c prev state', 'color: gray', store.getState());
//       console.log('%c action', 'color: blue', action);
//       const returnValue = next(action);
//       console.log('%c next state', 'color : green', store.getState());
//       console.groupEnd(action.type);
//    };
// };

// TODO:
// should maybe understand this a little better
// promises, store.dispatch. video 16 on egghead

// const promise = (store) => (next) => (action) => {
//    if (typeof action.then === 'function') {
//       return action.then(next);
//    }
//    return next(action);
// };

// const persistedState = {
//    sets: [{
//       id: "0",
//       count: "1",
//       dist: "25",
//       interval: "2:00",
//       completed: "false"
//    }]
// }

// const wrapDispatchWithMiddlewares = (store, middlewares) => {
//    middlewares.slice().reverse().forEach(middlewares => {
//       store.dispatch = middleware(store)(store.dispatch);
//    })
// }

const configureStore = () => {
   // const persistedState = loadState();
   const middlewares = [promise];
   if (process.env.NODE_ENV !== 'production') {
      middlewares.push(createLogger());
   }
   // store.subscribe(throttle(() => {
   //    saveState({
   //       sets: store.getState().sets
   //    });
   // }, 1000));

   // Commented out custom middlware applicator
   // wrapDispatchWithMiddlewares(store, middlewares);
   
   // second argument to createStore
   // can be persisted state (if you want)
   // would need to improve method for assigning
   // id's to sets

   // I guess it can also be "applyMiddleware api"
   // this can be second or third
   // with or without persistedState, must be second
   return createStore(
      rootReducer,
      // persistedState,
      applyMiddleware(...middlewares)
   );
   
   return store;
}

export default configureStore