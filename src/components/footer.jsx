import React from 'react';
import { connect } from 'react-redux';

import Filter from './filter';

export default () => (
  <div className="ui container center aligned">
    Show:
    {"  "}
    <Filter filter="SHOW_ALL" >
      All
    </Filter>
    {"  "}
    <Filter filter="SHOW_ACTIVE" >
      Active
    </Filter>
    {"  "}
    <Filter filter="SHOW_COMPLETED" >
      Completed
    </Filter>
  </div>
)