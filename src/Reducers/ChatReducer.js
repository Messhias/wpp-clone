import {
    USER_CHAT_LIST,
    SEND_MESSAGE_SUCCESS
} from '../Actions/Types';

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
