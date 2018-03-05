import React from 'react'
import PropTypes from 'prop-types'
import { Card, Icon } from 'semantic-ui-react'

const MAX_TITLE_VISIBLE_L = 20;
const MAX_SEARCH_VISIBLE_L = 25;

/* Helper function to slice lines by size */
const narrow = (text, size) => (text.length > size ? text.substr(0, size) + '...' : text );

const TodoList = ({ todos, searchPhrase, onTodoClick, onRemoveTodo, onEditClick}) => {
  /* Generate todo card */
  const todoCreator = (todo) =>{
    const { id, title, isCompleted } = todo;
    return (
      <Card key={id} className={(isCompleted ? 'todo-list__item todo-list__item_completed' : 'todo-list__item' )}>
        <Card.Content>
          <Card.Header>
            { isCompleted && <Icon name="checkmark"/> }
            <span className="todo-item__title" onClick={onTodoClick.bind(null, id)}>
              {narrow(title, MAX_TITLE_VISIBLE_L)}
            </span>
            <Icon name='edit' className="todo__edit-icon" onClick={onEditClick.bind(null, id, title )}/>
            <Icon name='remove' className="todo__remove-icon" onClick={onRemoveTodo.bind(null, id)}/>
          </Card.Header>
        </Card.Content>
      </Card>
    )
  }

  return (
    <Card.Group className="todo-list">
      {searchPhrase && <div><b>{narrow(searchPhrase, MAX_SEARCH_VISIBLE_L)}</b> - {todos.length} items found</div>}
      {todos.length > 0 ? (
        todos.map(todo => todoCreator(todo))
      ) : (
        <Card className="todo-list__empty">There are no items</Card>
      )}
    </Card.Group>
  )
}
 
TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      isCompleted: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  searchPhrase: PropTypes.string
}
 
export default TodoList
