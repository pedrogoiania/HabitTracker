import React from 'react';
import Constants from '../../components/Constants';
import strings from '../../localization';

export const HabitStateContext = React.createContext();
export const HabitDispatchContext = React.createContext();

export const SET_HABITS = 'SET_IS_DARK_MODE';

const DEFAULT_HABITS = [
  {
    title: null,
    data: [
      {
        icon: '🏹',
        text: 'Set Small Goals',
        finished: false,
        skipped: false,
        color: Constants.Colors.Pastel.americanPink,
      },
      {
        icon: '🏆',
        text: 'Work',
        finished: false,
        skipped: false,
        color: Constants.Colors.Pastel.lavenderBlue,
      },
      {
        icon: '🧘‍♂️',
        text: 'Meditation',
        finished: false,
        skipped: false,
        color: Constants.Colors.Pastel.distilledMoss,
      },
      {
        icon: '🏀',
        text: 'Basket',
        finished: false,
        skipped: false,
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

export const defaultState = {
  habits: DEFAULT_HABITS,
};

export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_HABITS: {
      return {
        ...state,
        habits: payload,
      };
    }

    default:
      return state;
  }
};

function HabitState({ initialState, dispatch, children }) {
  return (
    <HabitStateContext.Provider value={initialState}>
      <HabitDispatchContext.Provider value={dispatch}>{children}</HabitDispatchContext.Provider>
    </HabitStateContext.Provider>
  );
}

export default HabitState;
