import React from 'react';
import Footer from './footer';
import StopWatch from './stopwatch';
import AddSets from './addsets';
import SetList from './setlist';

const MyApp = () => {
   return (
    <div className="ui container center aligned">
      <div className="ui container center aligned">
        <h1 className="ui masthead">
           Swim Coach Buddy
        </h1>
      </div>
      <AddSets />
      <SetList />
      <StopWatch />
      <Footer />
    </div>
   );
};

export default MyApp;