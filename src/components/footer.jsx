import React from 'react';
import { connect } from 'react-redux';

import Filter from './filter';

export default () => (
  <div className="ui container center aligned">
    Show:
    {"  "}
    <Filter filter="all" >
      All
    </Filter>
    {",  "}
    <Filter filter="active" >
      Active
    </Filter>
    {",  "}
    <Filter filter="completed" >
      Completed
    </Filter>
  </div>
)