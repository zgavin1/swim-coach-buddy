import React from 'react';
import { connect } from 'react-redux';
import Footer from './footer';

const myApp = () => {
   return (
    <div className="ui container center aligned">
      <div className="ui container center aligned">
        <h1 className="ui masthead">
           Swim Coach Buddy
        </h1>
      </div>
      <Footer />
    </div>
   );
};

export default connect()(myApp);