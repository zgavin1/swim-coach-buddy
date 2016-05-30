import React from 'react';
import { connect } from 'react-redux';
// import C from './../constants';
// import actions from './../actions/actionCreators';

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
) => {
   return {
      active: ownProps.filter === state.filter
   };
};

const mapDispatchToLinkProps = (
   dispatch,
   ownProps
) => {
   return {
      onClick: () => {
         // dispatch(actions.setFilter(ownProps.filter))
      }
   };
};

export default connect(
   mapStateToLinkProps,
   mapDispatchToLinkProps
)(Filter);