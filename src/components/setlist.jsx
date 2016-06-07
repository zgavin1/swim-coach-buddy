import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Set from './set';
import { toggleSet, removeSet } from './../actions/setActions';

// TODO: Figure out how/why
// the sets are coming in weird order
// order seems to be pyramidal(?)
const SetList = ({
  sets,
  onSetClick,
  onSetClose
}) => (
  <ul>
    {sets.reverse().map(set =>
      <Set
        key={set.id}
        {...set}
        onClick={() => onSetClick(set.id)}
        removeSet={() => onSetClose(set.id)} />
    )}
  </ul>  
)

const getVisibleSets = (
  sets,
  filter
) => {
  switch (filter) {
    case "all":
      return sets;
    case "completed":
      return sets.filter(
        s => s.completed
      );
    case "active":
      return sets.filter(
        s => !s.completed
      );
    default:
      return sets;
  }
}

const mapStateToSetListProps = (state, { params }) => ({
  sets: getVisibleSets(
    state.sets,
    params.filter || 'all'
  )
});

// const mapDispatchToSetListProps = (dispatch) => ({
    // When the argument from the method and the 
    // argument for the action are identical (here)
    // can use shorthand in the connect method (below)

    // onSetClick(id) {
    //   dispatch(actions.toggleSet(id))
    // },
    // onSetClose(id) {
    //   dispatch(actions.removeSet(id))
    // }
// });

const VisibleSetList = withRouter(connect(
  mapStateToSetListProps,
  { onSetClick: toggleSet, onSetClose: removeSet }
)(SetList));

export default VisibleSetList;