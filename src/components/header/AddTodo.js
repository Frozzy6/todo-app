import React from 'react';
import { connect } from 'react-redux';
import { Button, Icon } from 'semantic-ui-react'

import { ADD_TODO_DIALOG } from '../../constants';
import { openDialog } from '../../actions';
import TodoForm from '../TodoForm';
import DialogContainer from '../../containers/DialogContainer';

let NewTodoBtn = ( ({dispatch}) => {
  const AddTodoDialog = DialogContainer({
    name: ADD_TODO_DIALOG,
    title: 'New Task'
  })(TodoForm);

  const handleClick = e => {
    dispatch(openDialog(ADD_TODO_DIALOG));
  };

  return (
    <Button animated color='blue' onClick={handleClick}>
      <Button.Content visible color='blue'>NEW</Button.Content>
      <Button.Content hidden>
        <Icon name='plus' />
      </Button.Content>
      <AddTodoDialog/>
    </Button>
  )
})

export default connect()(NewTodoBtn);
