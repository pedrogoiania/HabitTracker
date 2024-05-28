import React, { useEffect } from 'react';
import { View } from 'react-native';
import SwipeableItem from 'react-native-swipeable-item';
import Constants from '../../../../components/Constants';
import Text from '../../../../components/Text';
import Icons from '../../../../components/Icons';
import strings from '../../../../localization';

function StatusComponent({ status }) {
  const statusIconName = {
    finished: 'check',
    skipped: 'arrow',
    none: 'none',
  };

  const statusBackgroundColor = {
    finished: Constants.Colors.Primary.success,
    skipped: Constants.Colors.Secondary.gray,
  };

  if (status === 'none') {
    return null;
  }

  return (
    <View
      style={{
        marginHorizontal: 20,
        width: 30,
        height: 30,
        borderRadius: 30,
        backgroundColor: statusBackgroundColor[status],
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Icons name={statusIconName[status]} color={Constants.Colors.Primary.white} width={16} />
    </View>
  );
}

function RightSwipeComponent() {
  return (
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
        <Icons width={24} height={24} name="check"  color={Constants.Colors.Primary.white} />
      </View>
    </View>
  );
}

function LeftSwipeComponent() {
  return (
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
            color: Constants.Colors.Primary.white,
          }}
        >
          {strings.skip}
        </Text.Body>
        <Icons width={32} height={32} name="arrow" color={Constants.Colors.Primary.white} />
      </View>
    </View>
  );
}

function HabitItem({ habit, onComplete, onSkip }) {
  const getStatus = () => {
    let statusToReturn = 'none';

    if (habit.finished) {
      statusToReturn = 'finished';
    }

    if (habit.skipped) {
      statusToReturn = 'skipped';
    }

    return statusToReturn;
  };

  const swipeChange = (params) => {
    if (habit.finished || habit.skipped) {
      return;
    }

    switch (params.openDirection) {
      case 'right':
        if (params.snapPoint < 100) {
          return;
        }
        onComplete(habit);
        break;
      case 'left':
        if (params.snapPoint < 150) {
          return;
        }
        onSkip(habit);
        break;
      default:
    }
  };

  useEffect(() => {
    getStatus();
  }, []);

  return (
    <SwipeableItem
      onChange={swipeChange}
      renderUnderlayRight={RightSwipeComponent}
      renderUnderlayLeft={LeftSwipeComponent}
      snapPointsLeft={habit.finished || habit.skipped ? [0] : [120, 150]}
      snapPointsRight={habit.finished || habit.skipped ? [0] : [75, 100]}
    >
      <View
        style={{
          backgroundColor: habit.color,
          height: 64,
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          borderRadius: 8,
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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

        <StatusComponent status={getStatus()} />
      </View>
    </SwipeableItem>
  );
}

export default HabitItem;
