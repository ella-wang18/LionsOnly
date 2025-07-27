/**
 * @format
 */

import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { AppRegistry } from 'react-native';
import {Provider} from 'react-redux';
import App from './App';
import store from './configureStore';
import { name as appName } from './app.json';

//const store = configureStore();

class LionsOnly extends Component {
  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => LionsOnly);
