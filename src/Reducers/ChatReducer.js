import { USER_CHAT_LIST } from '../Actions/Types';

const INITIAL_STATE = {

}

export default(state = INITIAL_STATE, action) => {
    switch (action.type) {

        case USER_CHAT_LIST:
            return action.payload;

        default:
            return state;
    }
}
