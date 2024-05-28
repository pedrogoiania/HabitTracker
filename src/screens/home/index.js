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
import useHabits from '../../hooks/Habits';
import Icons from '../../components/Icons';
import useUser from '../../hooks/User';

function Home() {
  const { habits, completeHabit, skipHabit } = useHabits();
  const { isDarkMode, setIsDarkMode } = useUser();

  const changeTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <BaseView>
      <NavBar title={strings.home} rightComponent={<Icons name="filter" onPress={changeTheme} />} />
      <SectionList
        sections={habits}
        keyExtractor={(item, index) => item + index}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => (
          <HabitItem habit={item} onComplete={completeHabit} onSkip={skipHabit} />
        )}
        renderSectionHeader={({ section: { title } }) => <SectionDivider title={title} />}
      />
    </BaseView>
  );
}

export default Home;
