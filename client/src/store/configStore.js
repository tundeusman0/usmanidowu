import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

// import errorReducer from '../reducers/errors';
import successReducer from '../reducers/success';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// create store
export default () => {
  const store = createStore(
    combineReducers({
      // errorReducer,
      successReducer
    }),
    composeEnhancer(applyMiddleware(thunk))
  );
  return store;
};
