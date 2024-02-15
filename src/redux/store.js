import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import thunkMiddleware from 'redux-thunk'

const store = createStore(
  rootReducer
);

export default store;