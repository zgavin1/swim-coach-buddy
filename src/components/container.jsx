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
      <div className="ui divider"></div>
      <main className="ui three column very relaxed grid center aligned">
        <SetBuilder />
        <div className="ui vertical divider"></div>
        <SetList />
        <div className="ui vertical divider"></div>
        <StopWatch />
      </main>
      <div className="ui divider"></div>
      <Footer />
    </div>
   );
};

export default MyApp;
