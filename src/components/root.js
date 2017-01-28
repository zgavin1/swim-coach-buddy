import React from 'react';
import { Provider } from 'react-redux';
import App from './container';

import { Router, Route, browserHistory, Link } from 'react-router'

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
                <Link to='/workouts'>Workouts</Link>

                { this.props.children }
            </div>
        )
    }
});

const Workouts = React.createClass({
    render() {
        const workoutLinks =  [
            { name: 'workout a', id: "a" },
            { name: 'workout b', id: "b" },
        ].map((workout) => {
            return <Link to={workout.id}>{workout.name}</Link>
        });

        return (
            <div>
                <h2>Pick a Workout</h2>
                { workoutLinks }
            </div>
        )
    }
});

const Root = ({ store }) => (
   <Provider store={store}>
      <Router history={browserHistory} >
          <Route component={Header}>
              <Route path='/workouts' component={Workouts} />
              <Route path='/(:filter)' component={App} />
          </Route>
      </Router>
   </Provider>
)

export default Root;
