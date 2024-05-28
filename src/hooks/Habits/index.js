import { useContext } from 'react';
import { HabitDispatchContext, HabitStateContext, SET_HABITS } from '../../states/habitState';
import strings from '../../localization';
import Constants from '../../components/Constants';

const useHabits = () => {
  const { habits } = useContext(HabitStateContext);
  const habitDispatch = useContext(HabitDispatchContext);

  const completeHabit = (habit) => {
    const currentHabits = [...habits];
    const currentHabit = { ...habit, finished: true };

    habitDispatch({
      type: SET_HABITS,
      payload: [],
    });

    const itemToRemove = currentHabits[0].data.findIndex((item) => item.text === habit.text);

    delete [itemToRemove];

    currentHabits[0].data.splice(itemToRemove, 1);

    const indexSectionToAdd = currentHabits.findIndex((item) => item.title === strings.completed);

    if (indexSectionToAdd === -1) {
      currentHabits.push({
        title: strings.completed,
        data: [currentHabit],
      });
    }

    if (indexSectionToAdd >= 0) {
      const currentItems = [...currentHabits[indexSectionToAdd].data];

      currentItems.push(currentHabit);

      currentHabits[indexSectionToAdd].data = currentItems;
    }

    habitDispatch({
      type: SET_HABITS,
      payload: currentHabits,
    });
  };

  const skipHabit = (habit) => {
    const currentHabits = [...habits];
    const currentHabit = { ...habit, skipped: true };

    habitDispatch({
      type: SET_HABITS,
      payload: [],
    });

    const itemToRemove = currentHabits[0].data.findIndex((item) => item.text === habit.text);

    delete [itemToRemove];

    currentHabits[0].data.splice(itemToRemove, 1);

    const indexSectionToAdd = currentHabits.findIndex((item) => item.title === strings.skipped);

    if (indexSectionToAdd === -1) {
      currentHabits.push({
        title: strings.skipped,
        data: [currentHabit],
      });
    }

    if (indexSectionToAdd >= 0) {
      const currentItems = [...currentHabits[indexSectionToAdd].data];

      currentItems.push(currentHabit);

      currentHabits[indexSectionToAdd].data = currentItems;
    }

    habitDispatch({
      type: SET_HABITS,
      payload: currentHabits,
    });
  };

  const getRandomEmoji = () => {
    const emojis = ['😀', '😂', '🥰', '😎', '🤔', '😴', '🥳', '👻', '🎃', '👽'];
    const index = Math.floor(Math.random() * emojis.length);
    return emojis[index];
  };

  const getRandomColor = (obj) => {
    const keys = Object.keys(obj);
    const randomIndex = Math.floor(Math.random() * keys.length);
    const key = keys[randomIndex];

    return obj[key];
  };

  const addHabit = ({ text, icon }) => {
    const currentHabits = [...habits];
    const currentHabit = {
      text,
      icon: icon || getRandomEmoji(),
      skipped: false,
      finished: false,
      color: getRandomColor(Constants.Colors.Pastel),
    };

    currentHabits[0].data.push(currentHabit);

    habitDispatch({
      type: SET_HABITS,
      payload: currentHabits,
    });
  };

  return { habits, completeHabit, skipHabit, addHabit };
};

export default useHabits;
