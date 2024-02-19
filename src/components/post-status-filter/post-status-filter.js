import React from 'react';
import './post-status-filter.css';

export const PostStatusFilter = () => {
  return (
    <div className='btn-group'>
      <button className='btn btn-outline-info'>All</button>
      <button className='btn btn-outline-info '>Liked</button>
    </div>
  );
};
