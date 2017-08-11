import "regenerator-runtime/runtime";
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App.jsx';

render(<Provider store={store}>
    <App id="Alert1"/>
  </Provider>, document.getElementById('root'));