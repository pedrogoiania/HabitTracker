import { useContext } from 'react';
import { SET_IS_DARK_MODE, UserDispatchContext, UserStateContext } from '../../states/userState';

const useUser = () => {
  const userStateContext = useContext(UserStateContext);
  const userDispatchContext = useContext(UserDispatchContext);

  const { isDarkMode } = userStateContext;

  const setIsDarkMode = (bool) => {
    userDispatchContext({
      type: SET_IS_DARK_MODE,
      payload: bool,
    });
  };

  return { isDarkMode, setIsDarkMode };
};

export default useUser;
