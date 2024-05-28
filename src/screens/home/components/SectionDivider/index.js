import React from 'react';
import { View } from 'react-native';
import Text from '../../../../components/Text';
import Constants from '../../../../components/Constants';

function SectionDivider({ title }) {
  if (!title) {
    return null;
  }

  return (
    <View style={{ height: 64, flexDirection: 'row', alignItems: 'center' }}>
      <Text.Body
        style={{
          fontFamily: Constants.FontNames.Primary.SemiBold,
          fontSize: Constants.FontSizes.BodySize.medium,
          color: Constants.Colors.Secondary.gray,
        }}
      >
        {title}
      </Text.Body>

      <View
        style={{
          flex: 1,
          backgroundColor: Constants.Colors.Primary.gray,
          height: 2,
          marginLeft: 16,
        }}
      />
    </View>
  );
}

export default SectionDivider;
