import uuidv1 from 'uuid/v1';
import { ADD_TODO_DIALOG, EDIT_TODO_DIALOG } from '../constants';


export const addTodo = title => ({
  type: 'ADD_TODO',
  id: uuidv1(),
  title
});

export const editTodo = (id, title) => ({
  type: 'EDIT_TODO',
  id,
  title
});

export const removeTodo = id => ({
  type: 'REMOVE_TODO',
  id
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
});

export const searchChange = value => ({
  type: 'SEARCH_CHANGE',
  value
});

export const setSort = sort => ({
  type: 'SET_SORT',
  sort
});

export const openDialog = (name, payload = {}) => ({
   type: 'OPEN_DIALOG',
   name,
   payload
});

export const closeDialog = (name) => ({
   type: 'CLOSE_DIALOG',
   name
});

export function dialogSubmit( name, payload ){
  return (dispatch) => {
    switch (name) {
      case ADD_TODO_DIALOG:
        dispatch(addTodo(payload.title));
        break;
      case EDIT_TODO_DIALOG:
        dispatch(editTodo(payload.id, payload.title))
        break;
      default:
        console.warn('Unhandled dialog submit action');
        return null;
    }
  }
}
