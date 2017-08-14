import { keaReducer } from 'kea'
import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import loggerMiddleware from './logger-middleware';

const reducers = combineReducers({
  kea: keaReducer('kea'),
  scenes: keaReducer('scenes'),
})

let composeEnhancers = compose;

const composeWithDevToolsExtension =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__; 
if (typeof composeWithDevToolsExtension === 'function') {
  composeEnhancers = composeWithDevToolsExtension;
}

const enhancers = [];

const store = createStore(reducers, {}, 
  composeEnhancers(
    applyMiddleware(loggerMiddleware),
    ...enhancers,
  ));

export default store;
