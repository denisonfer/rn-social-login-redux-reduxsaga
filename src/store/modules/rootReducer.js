import { combineReducers } from 'redux';

import auth from './auth/reducers';
import usuario from './usuario/reducers';

export default combineReducers({
  auth,
  usuario,
});
