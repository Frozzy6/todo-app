import { SORT_BY_ALPHABET_REVERSED } from '../constants';

const Sort = (state = SORT_BY_ALPHABET_REVERSED, action) => {
  switch (action.type) {
    case 'SET_SORT':
      return action.sort
    default:
      return state
  }
}
 
export default Sort;
