import { CHAT_LIST_FETCH } from '../Actions/Types';

const INITIAL_STATE = {}

export default(state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHAT_LIST_FETCH:
            return action.payload;

        default:
            return state;

    }
}
