import { useContext } from 'react';
import { HabitDispatchContext, HabitStateContext, SET_HABITS } from '../../states/habitState';
import strings from '../../localization';

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

  return { habits, completeHabit, skipHabit };
};

export default useHabits;
