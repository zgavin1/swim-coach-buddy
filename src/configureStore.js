import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
// import promise from 'redux-promise';
import createLogger from 'redux-logger'

const configureStore = () => {
   const middlewares = [thunk];
   if (process.env.NODE_ENV !== 'production') {
      middlewares.push(createLogger());
   }

   /* 
   * Second argument to createStore
   * can be persisted state.
   * It can also be the applyMiddleware api
   * This can be second or third.
   * persistedState must be second.
   */
   return createStore(
      rootReducer,
      // persistedState,
      applyMiddleware(...middlewares)
   );
   
  //  return store;
}

export default configureStore
/*
* The basic mechanism of a thunk
* from Redux-Thunk.
*/
// const thunk = (store) => (next) => (action) =>
//    typeof action === 'function' ?
//       action(store.dispatch, store.getState) :
//       next(action);

// TODO:
// should maybe understand this a little better
// promises, store.dispatch. video 16 on egghead


/*
* The basic mechanism of a promise
* from Redux-Promise.
*/
// const promise = (store) => (next) => (action) => {
//    if (typeof action.then === 'function') {
//       return action.then(next);
//    }
//    return next(action);
// };

/*
* The basic mechanism of applyMiddlware
* from Redux.
*/
// const wrapDispatchWithMiddlewares = (store, middlewares) => {
//    middlewares.slice().reverse().forEach(middlewares => {
//       store.dispatch = middleware(store)(store.dispatch);
//    })
// }
