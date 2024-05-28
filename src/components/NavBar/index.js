import React from 'react';

import { StyleSheet, View } from 'react-native';
import Text from '../Text';
import Constants from '../Constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: Constants.Size.big,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function NavBar({ title }) {
  return (
    <View style={styles.container}>
      <Text.Heading
        style={{
          fontSize: Constants.FontSizes.HeadingSize.medium,
          fontFamily: Constants.FontNames.Primary.Bold,
        }}
      >
        {title}
      </Text.Heading>
    </View>
  );
}

export default NavBar;
