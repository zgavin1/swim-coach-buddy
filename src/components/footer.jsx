import React from 'react';
import { connect } from 'react-redux';

import Filter from './../components/filter';
import C from './../constants';

export default () => (
  <p>
    Show:
    {"  "}
    <Filter filter={C.SHOW_ALL} >
      All
    </Filter>
    {"  "}
    <Filter filter={C.SHOW_DEPOSITS} >
      Deposits
    </Filter>
    {"  "}
    <Filter filter={C.SHOW_WITHDRAWALS} >
      Withdrawals
    </Filter>
  </p>
)