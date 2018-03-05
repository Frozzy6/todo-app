import React, { Component } from 'react';
import { Segment, Divider } from 'semantic-ui-react'

import VisibleTodoList from './containers/visibleTodoList';
import AppHeader from './components/AppHeader';

class App extends Component {
  render() {
    return (
      <Segment className="app">
        <AppHeader/>
        <Divider/>
        <VisibleTodoList />
      </Segment>
    );
  }
}

export default App;
