const todos = ( state = [], action ) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [ ...state,
        {
          id: action.id,
          title: action.title,
          isCompleted: false
        }
      ]
    case 'EDIT_TODO':
      return state.map( todo => {
        if ( todo.id === action.id ) {
          return {...todo, title:action.title }
        }
        return todo;
      });
    case 'REMOVE_TODO':
      return state.filter( item => item.id !== action.id )
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, isCompleted: !todo.isCompleted}
          : todo
      )
    default :
      return state
  }
}

export default todos;
