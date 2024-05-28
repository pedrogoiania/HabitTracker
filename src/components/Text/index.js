import React from 'react';

import { Text as RNText, StyleSheet } from 'react-native';
import Constants from '../Constants';
import useUser from '../../hooks/User';

function Text(props) {
  const { style } = props;

  const { isDarkMode } = useUser();

  const customStyles = new StyleSheet.create({
    text: {
      fontFamily: Constants.FontNames.Primary.Regular,
      color: isDarkMode ? Constants.Colors.Primary.white : Constants.Colors.Primary.black,
      ...style,
    },
  });

  return <RNText {...props} style={customStyles.text} />;
}

function Heading(props) {
  return <Text {...props} />;
}

function Body(props) {
  return <Text {...props} />;
}

Text.Heading = Heading;

Text.Body = Body;

export default Text;
