import "regenerator-runtime/runtime";
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App.jsx';

function Root() {
  return <Provider store={store}>
  <App />
</Provider>; 
}
render(<Root />, document.getElementById('root'));