import React from 'react';
import { View } from 'react-native';
import SwipeableItem, { useSwipeableItemParams } from 'react-native-swipeable-item';
import Constants from '../../../../components/Constants';
import Text from '../../../../components/Text';
import Icons from '../../../../components/Icons';
import strings from '../../../../localization';

function HabitItem({ habit }) {
  return (
    <SwipeableItem
      onChange={(params) => {
        console.log('params: ', params);
      }}
      renderUnderlayRight={() => (
        <View
          style={{
            backgroundColor: Constants.Colors.Primary.success,
            height: 64,
            alignItems: 'center',
            // justifyContent: 'center',
            flexDirection: 'row',
            borderRadius: 8,
          }}
        >
          <View style={{ width: 75, justifyContent: 'center', alignItems: 'center' }}>
            <Icons width={24} height={24} name="check" />
          </View>
        </View>
      )}
      renderUnderlayLeft={() => (
        <View
          style={{
            backgroundColor: Constants.Colors.Primary.error,
            height: 64,
            alignItems: 'center',
            justifyContent: 'flex-end',
            flexDirection: 'row',
            borderRadius: 8,
          }}
        >
          <View
            style={{
              width: 120,
              justifyContent: 'flex-end',
              alignItems: 'center',
              flexDirection: 'row',
              marginRight: 24,
            }}
          >
            <Text.Body
              style={{
                fontSize: Constants.FontSizes.BodySize.large,
                fontFamily: Constants.FontNames.Primary.SemiBold,
              }}
            >
              {strings.skip}
            </Text.Body>
            <Icons width={32} height={32} name="arrow" />
          </View>
        </View>
      )}
      snapPointsLeft={[120, 150]}
      snapPointsRight={[75, 100]}
    >
      <View
        style={{
          backgroundColor: habit.color,
          height: 64,
          alignItems: 'center',
          flexDirection: 'row',
          borderRadius: 8,
        }}
      >
        <Text style={{ fontSize: 30, marginHorizontal: 10 }}>{habit.icon}</Text>
        <Text.Heading
          style={{
            color: Constants.Colors.Primary.black,
            fontFamily: Constants.FontNames.Primary.SemiBold,
            fontSize: Constants.FontSizes.HeadingSize.small,
          }}
        >
          {habit.text}
        </Text.Heading>
      </View>
    </SwipeableItem>
  );
}

export default HabitItem;
