const INITIAL_STATE = {
    name: '',
    email: '',
    password: ''
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'CHANGE_EMAIL':
            return { ...state, email: action.payload };

        case 'CHANGE_PASSWORD':
            return { ...state, password: action.payload };

        default:
            return state;
    }

    return state;
}
