export const changeEmail = (email) => {
    return {
        type: 'CHANGE_EMAIL',
        payload: email
    }
}

export const changePassword = (pass) => {
    return {
        type: 'CHANGE_PASSWORD',
        payload: pass
    }
}

export const changeName = (name) => {
    return {
        type: 'CHANGE_NAME',
        payload: name
    }
}
