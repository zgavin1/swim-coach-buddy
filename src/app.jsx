import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import AppContainer from './components/container';
import configureStore from './configureStore'

const store = configureStore();

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
