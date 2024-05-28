import React from 'react';

export const UserStateContext = React.createContext();
export const UserDispatchContext = React.createContext();

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

function UserState({ initialState, dispatch, children }) {
  return (
    <UserStateContext.Provider value={initialState}>
      <UserDispatchContext.Provider value={dispatch}>{children}</UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

export default UserState;
