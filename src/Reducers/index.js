import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';
import AppReducer from './AppReducer';

export default combineReducers({
    AuthReducer,
    AppReducer
});
