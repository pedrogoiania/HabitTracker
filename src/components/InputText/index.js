import React from 'react';
import { TextInput, View } from 'react-native';
import Text from '../Text';
import Constants from '../Constants';

function InputText({ onChange }) {
  return (
    <View>
      <Text
        style={{
          fontFamily: Constants.FontNames.Primary.Bold,
          marginBottom: 10,
        }}
      >
        Title
      </Text>
      <TextInput
        onChangeText={onChange}
        style={{
          backgroundColor: '#1F222A',
          color: 'white',
          height: 56,
          fontFamily: Constants.FontNames.Primary.SemiBold,
          paddingHorizontal: 20,
          borderRadius: 10,
        }}
        placeholder="Type the new Habit name"
        placeholderTextColor={Constants.Colors.Secondary.gray}
      />
    </View>
  );
}

export default InputText;
