import React from 'react';
import './app-header.css';

export const AppHeader = () => {
  return (
    <div className='wrapper-header d-flex justify-content-between align-items-end'>
      <h1>Jane</h1>
      <h4 className='header-text'>5 posts, liked: 10</h4>
    </div>
  );
};
