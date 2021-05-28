/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { Provider } from 'react-redux';
import type { Node } from 'react';

import {
  StyleSheet,
} from 'react-native';
import Calculator from './src/Calculator';
import { store } from './src/store';

const App: () => Node = () => {

  return (
    <Provider store={store}>
    <Calculator/>
    </Provider>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
