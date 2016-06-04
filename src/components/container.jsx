import React from 'react';
import Footer from './footer';
import StopWatch from './stopwatchcontainer';
// import AddSets from './setbuilder';
import SetBuilder from './setbuildercontainer';
// import SetList from './setlist';
import SetList from './setlistcontainer';


const MyApp = () => {
   return (
    <div className="ui container center aligned">
      <span className="ui container center aligned">
        <h1 className="ui masthead">
           Swim Coach Buddy
        </h1>
      </span>
      <main className="ui container center aligned group">
        <SetBuilder />
        <SetList />
        <StopWatch />
      </main>
      <Footer />
    </div>
   );
};

export default MyApp;