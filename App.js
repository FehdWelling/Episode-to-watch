import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import thunk from 'redux-thunk';
import logger from 'redux-logger'

import Season from './sources-dev/components/Season' //Import the component file
import rootReducer from './sources-dev/reducers/index'; //Import the reducer

import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Warning: componentWillUpdate is deprecated',
  'Module RCTImageLoader requires',
  'Remote debugger is in a background tab',
]);

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['data']
}

let persistedReducer = persistReducer(persistConfig, rootReducer)
let store = createStore(persistedReducer, applyMiddleware(thunk, logger))
let persistor = persistStore(store)


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Season />
        </PersistGate>
      </Provider>
    );
  }
}