import { keaReducer } from 'kea'
import { combineReducers, createStore } from 'redux'

const reducers = combineReducers({
  kea: keaReducer('kea'),
  scenes: keaReducer('scenes'),
})

const store = createStore(reducers)
export default store;
