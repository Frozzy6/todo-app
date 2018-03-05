export default (state = {}, action) => {
  switch (action.type) {
    case 'OPEN_DIALOG':
      return {
        ...state,
        [action.name]: {
          isOpen: true,
          payload: action.payload
        }
      }
    case 'CLOSE_DIALOG':
      return {
        ...state,
        [action.name]: {
          isOpen: false
        }
      }
    default:
      return state;
  }
}
