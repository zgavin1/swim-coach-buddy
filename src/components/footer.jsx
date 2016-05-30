import React from 'react';
import { connect } from 'react-redux';

import Filter from './filter';

export default () => (
  <p>
    Show:
    {"  "}
    <FilterLink filter="SHOW_ALL" >
      All
    </FilterLink>
    {"  "}
    <FilterLink filter="SHOW_ACTIVE" >
      Active
    </FilterLink>
    {"  "}
    <FilterLink filter="SHOW_COMPLETED" >
      Completed
    </FilterLink>
  </p>
)