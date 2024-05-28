/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { StyleSheet } from 'react-native';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import Bootstrap from './src';

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
  },
});

function App() {
  return (
    <GestureHandlerRootView style={styles.rootView}>
      <Bootstrap />
    </GestureHandlerRootView>
  );
}

export default App;
