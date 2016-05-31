import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from 'react-dom';

import rootReducer from './reducers/rootReducer';
import AppContainer from './components/container';

render(
  <Provider store={createStore(rootReducer)}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
