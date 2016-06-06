import React from 'react';
import SetList from './setlist';

export default ({ filterParam }) => (
   <div className="container third-width">
      <SetList filter={filterParam} />
   </div>
);