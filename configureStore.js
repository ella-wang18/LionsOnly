// import {applyMiddleware, createStore} from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './src/redux/reducers';
// import {createLogger} from 'redux-logger';
//
// const logger = createLogger();
//
// export default function configureStore() {
//   return createStore(rootReducer, {}, applyMiddleware(thunk, logger));
// }

// configureStore.js

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './src/redux/reducers';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      __DEV__ ? [require('redux-logger').createLogger()] : []
    ),
  devTools: __DEV__,
});

export default store;
