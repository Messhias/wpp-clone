import {
    CHANGE_EMAIL,
    CHANGE_PASSWORD,
    CHANGE_NAME,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOADING
} from '../Actions/Types';


const INITIAL_STATE = {
    name: '',
    email: '',
    password: '',
    errorReducer: '',
    authErro: '',
    loading: false
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case CHANGE_EMAIL:
            return { ...state, email: action.payload };

        case CHANGE_PASSWORD:
            return { ...state, password: action.payload };

        case CHANGE_NAME:
            return { ...state, name: action.payload };

        case REGISTER_USER_ERROR:
            return { ...state, errorRegister: action.payload, loading: false };

        case REGISTER_USER_SUCCESS:
            return { ...state, name: '', password: '', loading: false };

        case LOGIN_FAIL:
            return { ...state, authErro: action.payload, loading: false };

        case LOADING:
            return { ...state, loading: true };

        default:
            return state;
    }

    return state;
}
