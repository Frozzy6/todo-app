import { combineReducers } from 'redux';
import todos from './todos';
import sort from './sort';
import search from './search';
import dialogs from './dialogs';

export default combineReducers({
  todos,
  mutations: combineReducers({search, sort}),
  dialogs
});
