import React from 'react';
import { PostListItem } from '../post-list-item/post-list-item';

import './post-list.css';

export const PostList = ({ posts, onDelete }) => {
  const elements = posts.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className='list-group-item m-3'>
        <PostListItem {...itemProps} onDelete={() => onDelete(id)} />
      </li>
    );
  });
  return <ul className='app-list list-group'>{elements}</ul>;
};
