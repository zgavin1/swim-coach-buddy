import React from 'react';
import { connect } from 'react-redux';
import actions from './../actions/filterActions';

const Filter = ({
  active,
  children,
  onClick
}) => {
  if (active) {
    return <span> {children} </span>
  }

  return (
    <button
      className="ui button"
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </button>
  );
};

const mapStateToLinkProps = (
  state,
  ownProps
) => ({
  active: ownProps.filter === state.filter
});

const mapDispatchToLinkProps = (
  dispatch,
  ownProps
) => ({
  onClick() {
    dispatch(actions.setVisibilityFilter(ownProps.filter))
  }
});

export default connect(
   mapStateToLinkProps,
   mapDispatchToLinkProps
)(Filter);