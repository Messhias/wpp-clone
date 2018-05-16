import {
    CHANGE_ADD_CONTACT_EMAIL,
    ADD_NEW_CONTACT_ERROR
} from '../Actions/Types';

const INITIAL_STATE = {
    emailValue: '',
    errorAddNewContact: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_ADD_CONTACT_EMAIL:
            return { ...state, emailValue: action.payload };
        case ADD_NEW_CONTACT_ERROR:
            return { ...state, errorAddNewContact: action.payload };
        default:
            return state;
    }
}
