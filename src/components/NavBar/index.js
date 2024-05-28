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
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function NavBar({ title, rightComponent }) {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text.Heading
          style={{
            fontSize: Constants.FontSizes.HeadingSize.medium,
            fontFamily: Constants.FontNames.Primary.Bold,
          }}
        >
          {title}
        </Text.Heading>
      </View>

      {rightComponent ? <View>{rightComponent}</View> : null}
    </View>
  );
}

export default NavBar;
