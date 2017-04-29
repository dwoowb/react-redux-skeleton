import { createStore, applyMiddleware, } from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';
// redux-logger will give us access to the previous state, action, and next state in the console with each dispatch
import { createLogger, } from 'redux-logger';

// createStore() takes a reducer and optionally the initialState and an enhancer
const configureStore = (saveState) => {
  const logger = createLogger();
  // logger must be the last middleware passed into applyMiddleware or else it will log the thunk and any involved promises
  const store = createStore(rootReducer, {}, applyMiddleware(thunk, logger));
  return store;
};

export default configureStore;