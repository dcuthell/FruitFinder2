
import { createStore, applyMiddleware, compose } from 'redux';
import { AsyncStorage } from 'react-native';
import createSagaMiddleware from 'redux-saga';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import getRootReducer from './reducers/index';
import sagas from './sagas/index';

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

const NavReduxMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);
middlewares.push(NavReduxMiddleware);


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
