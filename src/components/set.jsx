import React from 'react';
import { connect } from 'react-redux';

const Set = ({
  onClick,
  completed,
  count,
  dist,
  interval
}) => {
  return (
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? "line-through" : "none"
      }} >
      {count} x {dist} @ {interval}
    </li>
  )
}


export default Set;