import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import { LOCAL_STORAGE_KEY } from './constants';
import reducer from './reducers'
import DevTools from './containers/devTools';


const getInitState = () => {
  try {
    const state = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {}
    return state;
  } catch (e) {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    return {};
  }
}
const store = createStore(
  reducer,
  getInitState(),
  DevTools.instrument()
);

store.subscribe(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(store.getState()))
})

ReactDOM.render(
  <Provider store={store}>
    <React.Fragment>
      <App />
      <DevTools />
    </React.Fragment>
  </Provider>,
  document.getElementById('root')
);
