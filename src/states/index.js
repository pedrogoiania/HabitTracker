import React, { useReducer } from 'react';

import UserState, {
  reducer as UserDispatchContext,
  defaultState as UserStateContext,
} from './userState';

function StateConfig({ children }) {
  const [userState, userDispatch] = useReducer(UserDispatchContext, UserStateContext);

  return (
    <UserState initialState={userState} dispatch={userDispatch}>
      {children}
    </UserState>
  );
}

export default StateConfig;
