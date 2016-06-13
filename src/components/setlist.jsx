import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Set from './set';
import * as actions from './../actions/setActions';
import { getVisibleSets } from './../reducers/rootReducer';
import { fetchSets } from './../api';

class VisibleSetList extends Component {
  componentDidMount() {
    // debugger
    // fetchSets(this.props.filter).then(sets =>
    //   console.log(this.props.filter, sets)
    // );
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps) {
      this.fetchData();
    }
  }

  fetchData() {
    const { filter, receiveSets } = this.props;
    fetchSets(filter).then(sets =>
      receiveSets(filter, sets)
    );
  }

  render() {
    const { toggleSet, removeSet, ...rest } = this.props;
    return <SetList { ...rest} onSetClose={removeSet} onSetClick={toggleSet} />
  }
}

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

// const getVisibleSets = (
//   sets,
//   filter
// ) => {
//   switch (filter) {
//     case "all":
//       return sets;
//     case "completed":
//       return sets.filter(
//         s => s.completed
//       );
//     case "active":
//       return sets.filter(
//         s => !s.completed
//       );
//     default:
//       return sets;
//   }
// }

const mapStateToSetListProps = (state, { params }) => {
  const filter = params.filter || 'all';
  return {
    sets: getVisibleSets(state, filter),
    filter: filter
  }
};

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

VisibleSetList = withRouter(connect(
  mapStateToSetListProps,
  actions
)(VisibleSetList));

export default VisibleSetList;