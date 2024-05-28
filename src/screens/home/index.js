import React, { useState } from 'react';

import { SectionList, View } from 'react-native';
import BaseView from '../../components/BaseView';
import NavBar from '../../components/NavBar';
import strings from '../../localization';
import Text from '../../components/Text';
import Constants from '../../components/Constants';
import ItemSeparator from './components/ItemSeparator';
import SectionDivider from './components/SectionDivider';
import HabitItem from './components/HabitItem';

const DEFAULT_HABIT = [
  {
    title: null,
    data: [
      {
        icon: '🏹',
        text: 'Set Small Goals',
        finished: false,
        color: Constants.Colors.Pastel.americanPink,
      },
      {
        icon: '🏆',
        text: 'Work',
        finished: false,
        color: Constants.Colors.Pastel.lavenderBlue,
      },
      {
        icon: '🧘‍♂️',
        text: 'Meditation',
        finished: false,
        color: Constants.Colors.Pastel.distilledMoss,
      },
      {
        icon: '🏀',
        text: 'Basket',
        finished: false,
        color: Constants.Colors.Pastel.peachOrange,
      },
    ],
  },
  {
    title: strings.completed,
    data: [
      {
        icon: '😴',
        text: 'Sleep over 8h',
        finished: true,
        color: Constants.Colors.Pastel.apocyan,
      },
      {
        icon: '🕹️',
        text: 'Playing games',
        finished: true,
        color: Constants.Colors.Pastel.himalayanBalsam,
      },
      {
        icon: '🥊',
        text: 'Workout',
        finished: true,
        color: Constants.Colors.Primary.success,
      },
    ],
  },
];

function Home() {
  const [habits, setHabilities] = useState(DEFAULT_HABIT);

  return (
    <BaseView>
      <NavBar title={strings.home} />
      <SectionList
        sections={habits}
        keyExtractor={(item, index) => item + index}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <HabitItem habit={item} />}
        renderSectionHeader={({ section: { title } }) => <SectionDivider title={title} />}
      />
    </BaseView>
  );
}

export default Home;
