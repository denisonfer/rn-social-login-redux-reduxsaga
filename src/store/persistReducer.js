import AsyncStorage from '@react-native-community/async-storage';

import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'loginSocial',
      storage: AsyncStorage,
      whitelist: ['auth', 'usuario'],
    },
    reducers
  );
  return persistedReducer;
};
