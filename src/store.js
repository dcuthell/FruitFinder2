
import { createStore, applyMiddleware, compose } from 'redux';
import { AsyncStorage } from 'react-native';
import createSagaMiddleware from 'redux-saga';

import getRootReducer from './reducers/index';
import sagas from './sagas/index';

const middlewares = [];



const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);



const enhancer = compose(
  applyMiddleware(...middlewares),
);

export default function getStore(navReducer) {
  const store = createStore(
      getRootReducer(navReducer),
      {},
      enhancer,
  );
  sagaMiddleware.run(sagas);
  return store;
}
