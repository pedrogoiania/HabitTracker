import React from 'react';

import { SvgXml } from 'react-native-svg';
import { Pressable } from 'react-native';

import check from './check.svg';
import arrow from './arrow.svg';
import Constants from '../Constants';

const svgs = {
  check,
  arrow,
};

function Icons({
  width = 32,
  height = 32,
  color = Constants.Colors.Primary.white,
  onPress,
  name,
  style,
}) {
  return (
    <Pressable onPress={onPress} style={style}>
      <SvgXml color={color} fill={color} width={width} height={height} xml={svgs[name]} />
    </Pressable>
  );
}

export default Icons;
