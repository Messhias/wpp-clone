import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';
import AppReducer from './AppReducer';
import ContactListReducer from './ContactListReducer';
import ChatReducer from './ChatReducer';
import ChatListReducer from './ChatListReducer';

export default combineReducers({
    AuthReducer,
    AppReducer,
    ContactListReducer,
    ChatReducer,
    ChatListReducer
});
