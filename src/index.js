import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import NavBar from 'components/NavBar';
import BaseView from './components/BaseView';
import StateConfig from './states';
import Home from './screens/home';

function App() {
  return (
    <StateConfig>
      <Home />
    </StateConfig>
  );
}

export default App;
