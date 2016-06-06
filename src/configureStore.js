import throttle from 'lodash/throttle';
import { createStore } from 'redux';
import { loadState, saveState } from './localStorage';
import rootReducer from './reducers/rootReducer';

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
   const persistedState = loadState();

   // second argument to createStore
   // can be persisted state (if you want)
   // would need to improve method for assigning
   // id's to sets

   const store = createStore(
      rootReducer,
      persistedState
   );

   store.subscribe(throttle(() => {
      saveState({
         sets: store.getState().sets
      });
   }, 1000));
   
   return store;
}

export default configureStore