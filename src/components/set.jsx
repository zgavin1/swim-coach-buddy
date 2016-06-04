import React from 'react';
import { connect } from 'react-redux';

const Set = ({
  onClick,
  removeSet,
  completed,
  count,
  dist,
  interval
}) => {
  return (
    <li style={{
        textDecoration: completed ? "line-through" : "none"
      }} >
      <span onClick={onClick}>{count} x {dist} @ {interval}</span>
      <button onClick={removeSet}>Remove</button>
    </li>
  )
}


export default Set;