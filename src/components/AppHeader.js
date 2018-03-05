import React from 'react';
import { Menu } from 'semantic-ui-react'

import {
  AddTodo,
  SearchBar,
  SortControl
} from './header';

export default (props, context) =>
  <Menu className="app-menu">
    <Menu.Item className="app-menu__item">
      <AddTodo />
    </Menu.Item>
    <Menu.Item className="app-menu__item">
      <SearchBar />
    </Menu.Item>
    <Menu.Item className="app-menu__item">
      <SortControl />
    </Menu.Item>
  </Menu>
