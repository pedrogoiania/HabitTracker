import React from 'react';

import { SvgXml } from 'react-native-svg';
import { Pressable } from 'react-native';

import check from './check.svg';
import arrow from './arrow.svg';
import plus from './plus.svg';
import filter from './filter';
import Constants from '../Constants';
import useUser from '../../hooks/User';

const svgs = (color) => ({
  check,
  arrow,
  filter: filter({ color }),
  plus,
});

function Icons({ width = 32, height = 32, color, onPress, name, style }) {
  const { isDarkMode } = useUser();

  const defaultColor = isDarkMode ? Constants.Colors.Primary.white : Constants.Colors.Primary.black;

  return (
    <Pressable onPress={onPress} style={style}>
      <SvgXml
        color={color || defaultColor}
        stroke={color || defaultColor}
        fill={color || defaultColor}
        width={width}
        height={height}
        xml={svgs(color || defaultColor)[name]}
      />
    </Pressable>
  );
}

export default Icons;
