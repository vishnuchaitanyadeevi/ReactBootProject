import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
  // applyMiddleware(thunk, logger)
);
export default store;
