import React from 'react';
import { connect } from 'react-redux';

const SetList = ({
  sets,
  onSetClick
}) => (
  <ul>
    {sets.reverse().map(set =>
      <Set
        key={set.id}
        {...set}
        onClick={() => onSetClick(set.id)} />
    )}
  </ul>  
)

const getVisibleSets = (
  sets,
  filter
) => {
  switch (filter) {
    case "SHOW_ALL":
      return sets;
    case "SHOW_COMPLETED":
      return sets.filter(
        s => s.completed
      );
    case "SHOW_ACTIVE":
      return sets.filter(
        s => !s.completed
      );
    default:
      return sets;
  }
}

const mapStateToSetListProps = (state) => {
  return {
    sets: getVisibleSets(
      state.sets,
      state.visibilityFilter
    )
  };
};

const mapDispatchToSetListProps = (dispatch) => {
  return {
    onSetClick: (id) => {
      dispatch({
        type: "TOGGLE_SET",
        id
      })
    }
  };
};

const VisibleSetList = connect(
  mapStateToSetListProps,
  mapDispatchToSetListProps
)(SetList);

export default VisibleSetList;