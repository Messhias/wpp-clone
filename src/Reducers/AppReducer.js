import {
    CHANGE_ADD_CONTACT_EMAIL,
    ADD_NEW_CONTACT_ERROR,
    ADD_CONTACT_SUCCESS
} from '../Actions/Types';

const INITIAL_STATE = {
    emailValue: '',
    errorAddNewContact: '',
    addContactSuccess: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_ADD_CONTACT_EMAIL:
            return { ...state, emailValue: action.payload };
        case ADD_NEW_CONTACT_ERROR:
            return { ...state, errorAddNewContact: action.payload };
        case ADD_CONTACT_SUCCESS:
            return { ...state, addContactSuccess: action.payload, emailValue: '', errorAddNewContact: '' };
        default:
            return state;
    }
}
