import React, { Component } from 'react';
import './post-list-item.css';

export class PostListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      important: false,
      liked: false,
    };
    this.onImportant = this.onImportant.bind(this);
    this.onLike = this.onLike.bind(this);
  }

  onImportant() {
    this.setState(({ important }) => ({
      important: !important,
    }));
  }

  onLike() {
    this.setState(({ liked }) => ({
      liked: !liked,
    }));
  }

  render() {
    const { label, onDelete } = this.props;
    const { important, liked } = this.state;
    let classNames = 'app-list-item d-flex justify-content-between';
    if (important) {
      classNames += ' important';
    }
    let like = <i className='bi bi-suit-heart'></i>;
    if (liked) {
      like = <i class='bi bi-heart-fill'></i>;
    } else {
      like = <i className='bi bi-suit-heart'></i>;
    }

    return (
      <div className={classNames}>
        <span className='app-list-item-label'>{label}</span>
        <div className='d-flex justify-content-center align-items-center'>
          <button
            type='button'
            className='btn btn-sm btn-outline-none'
            onClick={this.onImportant}
          >
            <i className='bi bi-star'></i>
          </button>
          <button type='button' className='btn btn-sm' onClick={onDelete}>
            <i className='bi bi-trash-fill'></i>
          </button>
          <button type='button' className='btn btn-sm' onClick={this.onLike}>
            {like}
          </button>
        </div>
      </div>
    );
  }
}
