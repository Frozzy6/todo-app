const search = ( state = "", action ) => {
  switch (action.type) {
    case 'SEARCH_CHANGE':
      return action.value;
    default :
      return state
  }
}

export default search;
