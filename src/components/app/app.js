import React, { Component } from 'react';
import { AppHeader } from '../app-header/app-header';
import { SearchPanel } from '../search-panel/search-panel';
import { PostStatusFilter } from '../post-status-filter/post-status-filter';
import { PostList } from '../post-list/post-list';
import { PostAddForm } from '../post-add-form/post-add-form';

import './app.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { label: 'Going to learn REACT', important: true, id: 1 },
        { label: 'Going to learn JS', important: false, id: 2 },
        {
          label: 'Going to learn how to live',
          important: false,
          id: 3,
        },
      ],
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.maxId = 4;
  }

  deleteItem(id) {
    this.setState(({ data }) => {
      const ind = data.findIndex((elem) => elem.id === id);
      const before = data.slice(0, ind);
      const after = data.slice(ind + 1);
      const res = [...before, ...after];
      return {
        data: res,
      };
    });
  }

  addItem(body) {
    const newItem = {
      label: body,
      important: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      return {
        data: [...data, newItem],
      };
    });
  }
  render() {
    return (
      <div className='app'>
        <AppHeader />
        <div className='wrapper-body'>
          <div className='search-panel d-flex'>
            <SearchPanel />
            <PostStatusFilter />
          </div>
          <PostList posts={this.state.data} onDelete={this.deleteItem} />
          <PostAddForm onAdd={this.addItem} />
        </div>
      </div>
    );
  }
}
