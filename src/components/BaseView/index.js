import React from 'react';

import { SafeAreaView, StatusBar, View } from 'react-native';
import useUser from '../../hooks/User';
import Constants from '../Constants';

function BaseView({ children }) {
  const { isDarkMode } = useUser();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: isDarkMode
          ? Constants.Colors.Primary.black
          : Constants.Colors.Primary.white,
      }}
    >
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={{ flex: 1, marginHorizontal: 24 }}>{children}</View>
    </SafeAreaView>
  );
}

export default BaseView;
