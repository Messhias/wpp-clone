import {
    CHANGE_ADD_CONTACT_EMAIL,
    ADD_NEW_CONTACT_ERROR,
    ADD_CONTACT_SUCCESS,
    SEND_MESSAGE,
    CHANGE_MESSAGE
} from '../Actions/Types';

const INITIAL_STATE = {
    emailValue: '',
    errorAddNewContact: '',
    addContactSuccess: false,
    message: ''
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case CHANGE_ADD_CONTACT_EMAIL:
            return { ...state, emailValue: action.payload };
        case ADD_NEW_CONTACT_ERROR:
            return { ...state, errorAddNewContact: action.payload };
        case ADD_CONTACT_SUCCESS:
            return { ...state, addContactSuccess: action.payload, emailValue: '', errorAddNewContact: '' };
        case CHANGE_MESSAGE:
            return { ...state, message: action.payload };
        case SEND_MESSAGE:
            return { ...state };
        default:
            return state;
    }

    return state;
}
