import React from 'react';
import { Pressable } from 'react-native';
import Icons from '../../../../components/Icons';
import Constants from '../../../../components/Constants';

function NewHabitFloatButton({ onPress }) {
  return (
    <Pressable
      style={{
        position: 'absolute',
        right: 25,
        bottom: 25,
        height: 52,
        width: 52,
        borderRadius: 52,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Constants.Colors.Primary.info,
        zIndex: 1000,
      }}
      onPress={onPress}
    >
      <Icons
        onPress={onPress}
        name="plus"
        width={20}
        height={20}
        color={Constants.Colors.Primary.white}
      />
    </Pressable>
  );
}

export default NewHabitFloatButton;
