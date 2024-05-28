import React from 'react';
import { Pressable } from 'react-native';
import Constants from '../Constants';
import Text from '../Text';

function Button({ onPress }) {
  return (
    <Pressable
      style={{
        width: '100%',
        height: 60,
        backgroundColor: Constants.Colors.Primary.info,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
      }}
      onPress={onPress}
    >
      <Text.Heading
        style={{
          fontSize: Constants.FontSizes.HeadingSize.small,
          fontFamily: Constants.FontNames.Primary.Bold,
        }}
      >
        Add
      </Text.Heading>
    </Pressable>
  );
}

export default Button;
