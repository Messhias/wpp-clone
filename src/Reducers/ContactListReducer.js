import { USER_CONTACTS_LIST } from '../Actions/Types';

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_CONTACTS_LIST:
            return action.payload;
        break;
        default:
            return state;
    }
}
