import React from 'react';
import { Provider } from 'react-redux';
import App from './container';

import { Router, Route, browserHistory } from 'react-router'

// browser history not supported by IE9

const Root = ({ store }) => (
   <Provider store={store}>
      <Router history={browserHistory} >
         <Route path='/(:filter)' component={App} />
      </Router>
   </Provider>
)

export default Root;