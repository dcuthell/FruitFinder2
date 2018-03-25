// First we do our imports
import { createStore, applyMiddleware, compose } from 'redux';
import { AsyncStorage } from 'react-native';
import createSagaMiddleware from 'redux-saga';
// We also import our own files
import getRootReducer from 'reducers/index';
import sagas from 'sagas/index';

const middlewares = [];


// We create our sagaMiddleware object which we can use to connect our rootSaga
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);


// Our enhancer composes all of our middlewares; in this case it's just
// the sagaMiddleware
const enhancer = compose(
  applyMiddleware(...middlewares),
);

// Our getStore function will take our navReducer, combine it with our other
// reducers (via getRootReducer), and combine those with our middlewares to
// create a store object. Before returning the store object, we run our sagas.
export default function getStore(navReducer) {
  const store = createStore(
      getRootReducer(navReducer),
      {},                           // initial state
      enhancer,
  );
  sagaMiddleware.run(sagas);
  return store;
}
