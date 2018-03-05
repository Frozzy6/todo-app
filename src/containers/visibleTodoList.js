import React, { Component } from 'react';
import { connect } from 'react-redux';

import { EDIT_TODO_DIALOG, SORT_BY_ALPHABET_REVERSED } from '../constants';
import {toggleTodo, removeTodo, openDialog } from '../actions';
import TodoList from '../components/TodoList'
import TodoForm from '../components/TodoForm';
import DialogContainer from '../containers/DialogContainer';

const mutationsMap = {
  search: (state, result) => {
    const searchPhrase = state.mutations.search;
    if (searchPhrase) {
      return result.filter(t => t.title.indexOf(searchPhrase) > -1 )
    } else {
      return result;
    }
  },
  sort: (state, result) => {
    const currentSort = state.mutations.sort;

    if (currentSort === SORT_BY_ALPHABET_REVERSED) {
      return result.sort( (a,b) => {
        if (a.title < b.title) { return 1 }
        if (a.title > b.title) { return -1 }
        return 0;
      });
    }
    return result;
  }
}

const applyMutations = (state) => {
  const { todos, mutations } = state;
  let resultData = todos.slice();

  for ( let key in mutations ) {
    resultData = mutationsMap[key](state, resultData);
    if ( resultData.length === 0 ) {
      break;
    }
  }

  return resultData;
}

const mapStateToProps = state => {
  return {
    searchPhrase: state.mutations.search,
    todos: applyMutations(state)
  }
}

const VisibleTodoList = function() {
  return ( List => {

    const mapDispatchToProps = dispatch => {
      return {
        onTodoClick: id => dispatch(toggleTodo(id)),
        onRemoveTodo: id => dispatch(removeTodo(id)),
        onEditClick: (id, title) => dispatch(openDialog(EDIT_TODO_DIALOG, {id, title} ))
      }
    }

    const EditTodoDialog = DialogContainer({
      name: EDIT_TODO_DIALOG,
      title: 'Edit Task'
    })(TodoForm);

    class ReduxTodoList extends Component {
      render(){
        return (
          <div>
            <List { ...this.props } />
            <EditTodoDialog />
          </div>
        )
      }
    }

    return connect(mapStateToProps, mapDispatchToProps)(ReduxTodoList)
  });

};
 
export default VisibleTodoList()(TodoList);
