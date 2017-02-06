import React from 'react';
import { connect } from 'react-redux';
// import { moment } from 'moment';
var moment = require( 'moment' );

const Set = ({
  onClick,
  removeSet,
  completed,
  count,
  dist,
  interval
}) => {
    const displayInterval = moment.unix(interval).format('m:ss');

  return (
    <li style={{
        textDecoration: completed ? "line-through" : "none"
      }} >
      <span onClick={onClick}>{count} x {dist} @ {displayInterval}</span>
      <button onClick={removeSet}>Remove</button>
    </li>
  )
}


export default Set;
