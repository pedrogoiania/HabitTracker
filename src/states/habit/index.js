import React from 'react';

export const HabitStateContext = React.createContext();
export const HabitDispatchContext = React.createContext();

export const SET_IS_DARK_MODE = 'SET_IS_DARK_MODE';

export const defaultState = {
  isDarkMode: true,
};

export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_IS_DARK_MODE: {
      return {
        ...state,
        isDarkMode: payload,
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
