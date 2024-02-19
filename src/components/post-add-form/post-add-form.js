import React from 'react';
import './post-add-form.css';

export const PostAddForm = ({ onAdd }) => {
  return (
    <div className='wrapper-add'>
      <form className='bottom-panel d-flex'>
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='What are you thinking about...'
          />
          <div className='input-group-append'>
            <button
              className='btn btn-outline-info'
              type='button'
              id='button-addon2'
              onClick={() => {
                onAdd('Hello');
              }}
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
