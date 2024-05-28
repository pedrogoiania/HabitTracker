import React, { useReducer } from 'react';

import UserState, {
  reducer as UserDispatchContext,
  defaultState as UserStateContext,
} from './userState';

import HabitState, {
  reducer as HabitDispatchContext,
  defaultState as HabitStateContext,
} from './habitState';

function StateConfig({ children }) {
  const [userState, userDispatch] = useReducer(UserDispatchContext, UserStateContext);
  const [habitState, habitDispatch] = useReducer(HabitDispatchContext, HabitStateContext);

  return (
    <UserState initialState={userState} dispatch={userDispatch}>
      <HabitState initialState={habitState} dispatch={habitDispatch}>
        {children}
      </HabitState>
    </UserState>
  );
}

export default StateConfig;
