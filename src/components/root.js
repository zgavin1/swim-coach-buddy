import React from 'react';
import { Provider } from 'react-redux';
import App from './container';

import { Router, Route, browserHistory } from 'react-router'

// browserHistory not supported by IE9

const Header = React.createClass({
    render() {
        return (
            <div className="main">
                <div>
                    <h1 className="ui masthead">
                        Swim Coach Buddy
                    </h1>
                </div>

                { this.props.children }
            </div>
        )
    }
});

const Root = ({ store }) => (
   <Provider store={store}>
      <Router history={browserHistory} >
          <Route component={Header}>
              <Route path='/(:filter)' component={App} />
          </Route>
      </Router>
   </Provider>
)

export default Root;
